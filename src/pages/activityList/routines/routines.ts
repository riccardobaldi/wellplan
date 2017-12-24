import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

// import { ActivitiesPage } from '../activities/activities';
import { RoutinesService } from '../shared/routines-service';
import { RoutineModel } from '../shared/routine-model';

@Component({
  selector: 'page-routines',
  templateUrl: 'routines.html'
})
export class RoutinesPage {

  public selectedRoutine:RoutineModel = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public routinesService:RoutinesService, private loadingCtrl:LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoutinesPage');
  }

  goToRoutine(routine:RoutineModel){
    this.clearSelectedRoutine();
    // this.navCtrl.push(ActivitiesPage, {routine});
  }

  addNewRoutine(name:string, description: string, image: string, activities: string){
    let loader = this.loadingCtrl.create();
    loader.present().then(()=>{
      this.routinesService.addRoutine(name, description, image, activities)
      .then(item =>{
        let routine = RoutineModel.fromJson(item);
        this.goToRoutine(routine);
        loader.dismiss();
      }, error => loader.dismiss());
    });
  }

  showAddRoutine(){
    console.log("show add Routine");
    let addRoutineAlert = this.alertCtrl.create({
      title: 'New Routine',
      message: 'Give a name to the new routine',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'description',
          placeholder: 'Description'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {}
        },
        {
          text: 'Add',
          handler: data => {
            let navTransition = addRoutineAlert.dismiss();
            navTransition.then(()=>{
              this.addNewRoutine(data.name, data.description, "custom.jpg", "");
            });
          }
        }
      ]
    });

    addRoutineAlert.present();
  }

  clearSelectedRoutine(){
    this.selectedRoutine = null;
  }

  selectRoutine(routine:RoutineModel){
    if(this.selectedRoutine == routine){
      this.clearSelectedRoutine();
    }
    else{
      this.selectedRoutine = routine;
    }
  }

  removeSelectedRoutine(){
    this.routinesService.removeRoutine(this.selectedRoutine);
    this.selectedRoutine = null;
  }

}
