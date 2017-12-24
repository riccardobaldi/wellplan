import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Routine } from '../../../app/interfaces/routine';
import { Activity } from '../../../app/interfaces/activity';

import { ActivityData } from '../../../app/providers/activity-data';

@IonicPage()

@Component({
  selector: 'page-activities-list',
  templateUrl: 'activities-list.html',
})

export class ActivitiesRoutinePage {
  routineInfo: Routine;
  activities: Array<Activity> = []; //solo activity della routine

  constructor(public navCtrl: NavController, public navParams: NavParams, public activityData: ActivityData) {
    this.routineInfo = navParams.data.routineData;
    console.log("Pagina activity routine: " + this.routineInfo.name);

      activityData.getActivities().then(theActResult => {
         let allActivities: Array<Activity> = theActResult; // tutte le activity

         for(let currentActivityId of this.routineInfo.activities){
           //console.log("Pagina all activity key: " + currentActivityId);
           this.activities.push(allActivities[currentActivityId]);
         }

       });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad activities-list Page');
  }

}
