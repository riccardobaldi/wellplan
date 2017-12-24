import { Injectable } from '@angular/core';

import { RoutineModel } from './routine-model';
import { DatabaseService } from "../../../app/providers/database-service";

@Injectable()
export class RoutinesService {

  public routines:RoutineModel[] = [];

  constructor(public database:DatabaseService) {
    this.getRoutines();
  }

  public addRoutine(name:string, description: string, image: string, activities: string){
    return this.database.addRoutine(name, description, image, activities).then((routine)=>{
      //update routine of items, and then return the added routine
      return this.getRoutines().then(()=>{
        return routine;
      })
    });
  }

  public getRoutines(){
    return this.database.getRoutines()
    .then((data:any) =>{
          let localRoutines:RoutineModel[] = [];
          if(data){
            for(let routine of data){
              localRoutines.push(new RoutineModel(routine.name, routine.description, routine.image, routine.activities, routine.id));
            }
          }
          this.routines = localRoutines;
        })
  }


  public removeRoutine(routine:RoutineModel){
    return this.database.deleteRoutine(routine.id).then(()=>{
      return this.getRoutines();
    });
  }

}
