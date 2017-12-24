import { Component } from '@angular/core';
import { NavController, ItemSliding, reorderArray } from 'ionic-angular';

import { RoutineData } from '../../../app/providers/routine-data';
import { ActivitiesRoutinePage } from '../activities-list/activities-list';
import { AddEditRoutinePage } from '../addEditRoutine/addEditRoutine';
import { Routine } from '../../../app/interfaces/routine';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-activities-routines',
  templateUrl: 'activities-routines.html'
})

export class ActivitiesRoutinesPage {
  routines: Array<Routine> = [];

  constructor(public navCtrl: NavController, public routineData: RoutineData, public alertCtrl: AlertController) {
    routineData.getRoutines().then(theRouResult => {
      this.routines = theRouResult;
    });
  }

  goRoutineDetails(theRoutineData: RoutineData) {
    //console.log("Pagina delle routines: " + theRoutineData);
    this.navCtrl.push(ActivitiesRoutinePage, { routineData: theRoutineData });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoutinesPage');
  }

  addRoutine() {
    this.navCtrl.push(AddEditRoutinePage, {});
  }


/*
    let theNewRoutine: string = prompt("New Routine");
    if (theNewRoutine !== '') {
      this.routines.push({
          id: this.routines.length,
          name: theNewRoutine,
          createDate: Date.toString(),
          image: 'glacier.jpg',
          state: 'open',
          data: "description",
          activities: []
      });

      this.routineData.appendCustomRoutine([
        this.routines.length,
        'theNewRoutine',
        Date.toString(),
        'glacier.jpg',
        'open',
        'description',
        []
      ]);

      this.routineData.loadLastCustomRoutine()
    }
    }
    */

  removeRoutine(slidingItem: ItemSliding, routineToDelete: any) {
    let confirm = this.alertCtrl.create({
      title: 'Remove routine?',
      message: 'Confirm to remove the selected routine?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            //console.log('Disagree clicked');
          }
        },
        {
          text: 'OK',
          handler: () => {
            routineToDelete.status = "removed";
            let index = this.routines.indexOf(routineToDelete);
            if (index > -1) {
               this.routines.splice(index, 1);
            }
            //console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
    slidingItem.close();
  }

  reorderItems(indexes){
        this.routines = reorderArray(this.routines, indexes);
    }

  editRoutine(slidingItem: ItemSliding, routineToDelete: any) {
    console.log('ionViewDidLoad editRoutine');
    slidingItem.close();
    //TODO open activities page!
  }

}
