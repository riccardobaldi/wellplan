import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ActivityData {
  data: any = null;

  constructor(public http: Http) {}

  load() {
    // check if the JSON data had been loaded and saved into the data variable
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get('assets/data/activities.json')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  getActivities() {
    return this.load().then(data => {
      return data;
    });
  }

  getFilteredActivities(queryString) {
   return this.load().then(Activities => {
     let theFilteredActivities: any = [];

     for (let theActivity of Activities) {
       if (theActivity.name.toLowerCase().indexOf(queryString.toLowerCase()) > -1) {
         theFilteredActivities.push(theActivity);
       }
     }

     return theFilteredActivities;
   });
  }

}
