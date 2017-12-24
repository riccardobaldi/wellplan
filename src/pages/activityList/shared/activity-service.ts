import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { ActivityModel } from './activity-model';
import { DatabaseService } from "../../../app/providers/database-service";

@Injectable()
export class ActivityService {

  public activities: ActivityModel[] = [];

  constructor(public database: DatabaseService, public http: Http) {
    this.getDefaultActivities();
    this.getActivities();
  }

  public getActivities(){
    return this.database.getActivities().then((data:any) =>{
      if(data){
        for(let activity of data){
          this.activities.push(new ActivityModel(activity.name, activity.description, activity.image1, activity.image2, activity.image3, activity.image4, activity.image5, activity.category, activity.id));
        }
      }
    })
  }

  // removeActivity(activity:ActivityModel){
  //   return this.database.removeActivity(activity.id)
  //   .then(()=>{
  //     return this.getActivities(activity.listId);
  //   })
  // }

  // updateActivity(originalTodo:ActivityModel, modifiedTodo:ActivityModel){
  //   return this.database.modifyActivity(modifiedTodo.description, modifiedTodo.isImportant, modifiedTodo.isDone, modifiedTodo.id)
  //   .then(()=>{
  //     return this.getActivities(modifiedTodo.listId);
  //   })
  // }

  // addActivity(activity:ActivityModel){
  //   return this.database.addActivities(activity.description, activity.isImportant, activity.isDone, activity.listId)
  //   .then(()=>{
  //     return this.getActivities(activity.listId);
  //   })
  // }

  getDefaultActivities() {
    //Da eseguire solo se il DB non esiste per non duplicare le activity di default!
    this.database.existsTable("activity").then(existsTable => {
        //console.log('****** Is it created?', existsTable);
        if(!existsTable) {
          console.log("ActivityService - tab da POPOLARE!");

          return new Promise(resolve => {
            this.http.get('assets/data/defactivities.json')
              .map(res => res.json())
              .subscribe(data => {
                for(let activity of data){
                  console.log("ActivityService - add default activity "+activity.name);
                  this.database.addActivity(activity.name, activity.description, activity.image1, activity.image2, activity.image3, activity.image4, activity.image5, activity.category);
                  this.activities.push(new ActivityModel(activity.name, activity.description, activity.image1, activity.image2, activity.image3, activity.image4, activity.image5, activity.category, activity.id));
                }
                //resolve(this.data);
              });
          });
        }
    });
  }

  filterActivities(searchTerm){
    return this.activities.filter((activity) => {
        return activity.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }


}
