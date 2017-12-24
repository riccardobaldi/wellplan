import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DatabaseService {

  private database: SQLiteObject;
  //initially set dbReady status to false
  private dbReady = new BehaviorSubject<boolean>(false);

  private dbOptions = {
    name: "wellplan_data.db",
    location: 'default'
    //createFromLocation: 1 ,
    //iosDatabaseLocation: 'Library'
  };

  private tableCreation_Routine = `CREATE TABLE IF NOT EXISTS routine (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    description TEXT,
    image TEXT,
    activities TEXT
  );`;

  private tableCreation_Activity = `CREATE TABLE IF NOT EXISTS activity (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    description TEXT,
    image1 TEXT,
    image2 TEXT,
    image3 TEXT,
    image4 TEXT,
    image5 TEXT,
    category TEXT
  );`;

  private tableCreation_ActivityHistory = `CREATE TABLE IF NOT EXISTS activityHistory (
    routineId INTEGER,
    activityId INTEGER,
    executionDateTime TEXT,
    duration INTEGER,
    FOREIGN KEY(routineId) REFERENCES routine(id),
    FOREIGN KEY(activityId) REFERENCES activity(id)
  );`;

  private tableCreation_TodoList = `CREATE TABLE IF NOT EXISTS list (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
  );`;

  private tableCreation_TodoTasks = `CREATE TABLE IF NOT EXISTS todo (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    description TEXT,
    isImportant INTEGER,
    isDone INTEGER,
    listId INTEGER,
    FOREIGN KEY(listId) REFERENCES list(id)
  );`;

  constructor(private platform:Platform, private sqlite:SQLite) {
    console.log("INITIALIZE DatabaseService!");

    this.platform.ready().then(()=>{
      this.sqlite.create(this.dbOptions).then((db:SQLiteObject)=>{ //openDatabase al posto di create per creare il DB solo se non esiste
        this.database = db;
        this.createTables().then(()=>{
          //we loaded or created tables, so, set dbReady to true
          this.dbReady.next(true);
        });
      })
    });
  }

  private isReady(){
    return new Promise((resolve, reject) =>{
      //if dbReady is true, resolve
      if(this.dbReady.getValue()){
        resolve();
      } else { //otherwise, wait to resolve until dbReady returns true
        this.dbReady.subscribe((ready)=>{
          if(ready){
            resolve();
          }
        });
      }
    })
  }

  private createTables(){
    return this.database.executeSql(this.tableCreation_TodoList,{}).then(()=> {
      return this.database.executeSql(this.tableCreation_TodoTasks,{}).then(()=> {
        return this.database.executeSql(this.tableCreation_Routine,{}).then(()=> {
          return this.database.executeSql(this.tableCreation_Activity,{}).then(()=> {
           return this.database.executeSql(this.tableCreation_ActivityHistory,{})
          })
        })
      })
    })
    .catch((err)=>console.log("DatabaseService - error detected creating tables", err));
  }


/*
QUERY PER ROUTINES e ACTIVITY - START
*/
  getRoutines(){
    return this.isReady()
    .then(()=>{
      return this.database.executeSql("SELECT * from routine", [])
      .then((data)=>{
        let lists = [];
        for(let i=0; i<data.rows.length; i++){
          lists.push(data.rows.item(i));
        }
        return lists;
      })
    })
  }

  addRoutine(name:string, description: string, image: string, activities: string){
    return this.isReady().then(()=>{
      return this.database.executeSql(`INSERT INTO routine(name, description, image, activities) VALUES ('${name}', '${description}', '${image}', '${activities}');`, {}).then((result)=>{
        if(result.insertId){
          return this.getRoutine(result.insertId);
        }
      })
    });
  }

  getRoutine(id:number){
    return this.isReady()
    .then(()=>{
      return this.database.executeSql(`SELECT * FROM routine WHERE id = ${id}`, [])
      .then((data)=>{
        if(data.rows.length){
          return data.rows.item(0);
        }
        return null;
      })
    })
  }

  deleteRoutine(id:number){
    return this.isReady()
    .then(()=>{
      return this.database.executeSql(`DELETE FROM routine WHERE id = ${id}`, [])
    })
  }

  getActivities(){
    return this.isReady()
    .then(()=>{
      return this.database.executeSql("SELECT * from activity", [])
      .then((data)=>{
        let lists = [];
        for(let i=0; i<data.rows.length; i++){
          lists.push(data.rows.item(i));
        }
        return lists;
      })
    })
  }

  getActivitiesFromRoutine(listId:number){
    return this.isReady()
    .then(()=>{
      return this.database.executeSql(`SELECT * from todo WHERE listId = ${listId}`, [])
            .then((data)=>{
              let todos = [];
              for(let i=0; i<data.rows.length; i++){
                let todo = data.rows.item(i);
                //cast binary numbers back to booleans: con la doppia negazione!!
                todo.isImportant = !!todo.isImportant;
                todo.isDone = !!todo.isDone;
                todos.push(todo);
              }
              return todos;
            })
    })
  }

  addActivity(name:string, description: string, image1: string, image2: string, image3: string, image4: string, image5: string, category: string){
    return this.isReady().then(()=>{
      return this.database.executeSql(`INSERT INTO activity(name, description, image1, image2, image3, image4, image5, category) VALUES ('${name}', '${description}', '${image1}', '${image2}', '${image3}', '${image4}', '${image5}', '${category}');`, {}).then((result)=>{
        // if(result.insertId){
        //   return this.getActivity(result.insertId);
        // }
      })
    });
  }

  addActivityToRoutine(description:string, isImportant:boolean, isDone:boolean, routineId:number){
    return this.isReady()
    .then(()=>{
      return this.database.executeSql(`INSERT INTO todo
        (description, isImportant, isDone, listId) VALUES (?, ?, ?, ?);`,
        //cast booleans to binary numbers
        [description, isImportant?1:0, isDone?1:0, routineId]);
    });
  }

  modifyActivity(description:string, isImportant:boolean, isDone:boolean, id:number){
    return this.isReady()
    .then(()=>{
      return this.database.executeSql(`UPDATE todo
        SET description = ?,
            isImportant = ?,
            isDone = ?
        WHERE id = ?`,
        //cast booleans to binary numbers
        [description, isImportant?1:0, isDone?1:0, id]);
    });
  }

  removeActivity(id:number){
    return this.isReady()
    .then(()=>{
      return this.database.executeSql(`DELETE FROM todo WHERE id = ${id}`, [])
    })
  }
/*
  QUERY PER ROUTINES e ACTIVITY - END
*/




/*
  QUERY PER TODO LIST - START
*/

getLists(){
  return this.isReady()
  .then(()=>{
    return this.database.executeSql("SELECT * from list", [])
    .then((data)=>{
      let lists = [];
      for(let i=0; i<data.rows.length; i++){
        lists.push(data.rows.item(i));
      }
      return lists;
    })
  })
}

addList(name:string){
  return this.isReady()
  .then(()=>{
    return this.database.executeSql(`INSERT INTO list(name) VALUES ('${name}');`, {}).then((result)=>{
      if(result.insertId){
        return this.getList(result.insertId);
      }
    })
  });
}

getList(id:number){
  return this.isReady()
  .then(()=>{
    return this.database.executeSql(`SELECT * FROM list WHERE id = ${id}`, [])
    .then((data)=>{
      if(data.rows.length){
        return data.rows.item(0);
      }
      return null;
    })
  })
}

deleteList(id:number){
  return this.isReady()
  .then(()=>{
    return this.database.executeSql(`DELETE FROM list WHERE id = ${id}`, [])
  })
}


getTodosFromList(listId:number){
  return this.isReady()
  .then(()=>{
    return this.database.executeSql(`SELECT * from todo WHERE listId = ${listId}`, [])
          .then((data)=>{
            let todos = [];
            for(let i=0; i<data.rows.length; i++){
              let todo = data.rows.item(i);
              //cast binary numbers back to booleans
              todo.isImportant = !!todo.isImportant;
              todo.isDone = !!todo.isDone;
              todos.push(todo);
            }
            return todos;
          })
  })
}

addTodo(description:string, isImportant:boolean, isDone:boolean, listId:number){
  return this.isReady()
  .then(()=>{
    return this.database.executeSql(`INSERT INTO todo
      (description, isImportant, isDone, listId) VALUES (?, ?, ?, ?);`,
      //cast booleans to binary numbers
      [description, isImportant?1:0, isDone?1:0, listId]);
  });
}

modifyTodo(description:string, isImportant:boolean, isDone:boolean, id:number){
  return this.isReady()
  .then(()=>{
    return this.database.executeSql(`UPDATE todo
      SET description = ?,
          isImportant = ?,
          isDone = ?
      WHERE id = ?`,
      //cast booleans to binary numbers
      [description, isImportant?1:0, isDone?1:0, id]);
  });
}

removeTodo(id:number){
  return this.isReady()
  .then(()=>{
    return this.database.executeSql(`DELETE FROM todo WHERE id = ${id}`, [])
  })
}

/*
  QUERY PER TODO LIST - END
*/

public existsTable(tableName:string) {
    return this.database.executeSql(`SELECT COUNT(*) AS mycount FROM ${tableName}`, []).then(function(result) {
        return(result.rows.item(0).mycount != 0); //EXIST NOT EMPTY table
    }, function(error) {
        return false; //NOT EXIST OR EMPTY table
    });
}

}
