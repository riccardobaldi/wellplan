import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActivityService } from '../shared/activity-service';

@Component({
  selector: 'page-activities',
  templateUrl: 'activities.html'
})

export class ActivitiesPage {

  searchTerm: string = '';
  items: any;

  constructor(public navCtrl: NavController, public activityService: ActivityService) {
    //this.items = activityService.getActivities(); //inizialmente non si vedono le activity!
    this.items = this.activityService.activities;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivitiesPage');
  }

  setFilteredActivities() {
    this.items = this.activityService.filterActivities(this.searchTerm);
  }

  // goActivityDetails(theActivityData) {
  //   console.log(theActivityData);
  //   // this.navCtrl.push(ActivityDetailsPage, { parkData: theActivityData });
  //   }

  // convertArray(actString:string){
    // ArrayList<String> arrStr = new ArrayList<String>();
    // JSONArray jArray = respJSON.optJSONArray(actString);
    //
    // for (int i = 0; i < jArray.length(); i++) {
    //    arrStr.add(jArray.getString(i));
    // }
  // }

  // convertArrayBack(ArrayList<String> arrStr){
  //   String[] Factores = arrStr.toArray(new String[arrStr.size()]);
  // }
/*
  getActivities(event) {
    // Reset items back to all of the items
    // this.getActivities().then(theResult => {
    //   this.activities = theResult;
    // })

    // set queryString to the value of the searchbar
    let queryString = event.target.value;

    if (queryString !== undefined) {
      // if the value is an empty string don't filter the items
      if (queryString.trim() == '') {
        return;
      }

      this.activityService.getFilteredActivities(queryString).then(theResult => {
        this.activities = theResult;
      })
    }
  }
*/
  resetList() {
    this.activityService.filterActivities("");
  }

}
