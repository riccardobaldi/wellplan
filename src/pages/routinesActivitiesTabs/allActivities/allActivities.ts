import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Activity } from '../../../app/interfaces/activity';
import { ActivityData } from '../../../app/providers/activity-data';

@Component({
  selector: 'page-allActivities',
  templateUrl: 'allActivities.html'
})

export class AllActivitiesPage {
  activities: Array<Activity> = [];
//  groupedActivities = [];
  searchQuery: string = '';

  constructor(public navCtrl: NavController, public activityData: ActivityData) {
    activityData.getActivities().then(theActResult => {
      this.activities = theActResult;
      //console.log("AllActivities: activities --> "+this.activities);
      //this.groupActivities(this.activities);
    });
  }

  getActivities(event) {
    // Reset items back to all of the items
    this.activityData.getActivities().then(theResult => {
      this.activities = theResult;
    })

    // set queryString to the value of the searchbar
    let queryString = event.target.value;

    if (queryString !== undefined) {
      // if the value is an empty string don't filter the items
      if (queryString.trim() == '') {
        return;
      }

      this.activityData.getFilteredActivities(queryString).then(theResult => {
        this.activities = theResult;
      })
    }
  }

  resetList(event) {
    // Reset items back to all of the items
    this.activityData.getActivities().then(theResult => {
      this.activities = theResult;
    })
  }

  customHeaderFn(record, recordIndex, records) {
    /*if (recordIndex % 20 === 0) {
      return 'Header ' + recordIndex;
    }
    return null;
    */
    if ( recordIndex > 0) {
        if ( record.name.charAt(0) !== records[recordIndex-1].name.charAt(0)) {
          return record.name.charAt(0);
        } else {
          return null;
        }
      } else {
        return record.name.charAt(0);
      }
  }

  goActivityDetails(theActivityData) {
    console.log(theActivityData);
    // this.navCtrl.push(ActivityDetailsPage, { parkData: theActivityData });
    }

}
