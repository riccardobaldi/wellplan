import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { ActivitiesRoutinesPage } from './activities-routines/activities-routines';
import { AllActivitiesPage } from './allActivities/allActivities';

@IonicPage()

@Component({
  selector: 'page-routinesActivitiesTab',
  templateUrl: 'routinesActivitiesTabs.html'
})

export class RoutinesActivitiesTabs {

    tab1Root: any = ActivitiesRoutinesPage;
    tab2Root: any = AllActivitiesPage;

    constructor(public navCtrl: NavController) {

    }

}
