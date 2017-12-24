import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { RoutinesPage } from './routines/routines';
import { ActivitiesPage } from './activities/activities';

@IonicPage()

@Component({
  selector: 'page-activitiesListTabs',
  templateUrl: 'activitiesListTabs.html'
})

export class ActivitiesListTabs {

    tab1Root: any = RoutinesPage;
    tab2Root: any = ActivitiesPage;

    constructor(public navCtrl: NavController) {

    }

}
