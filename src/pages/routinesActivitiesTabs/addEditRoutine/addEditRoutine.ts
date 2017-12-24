import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { RoutineData } from '../../../app/providers/routine-data';
import { Activity } from '../../../app/interfaces/activity';
import { ActivityData } from '../../../app/providers/activity-data';

@Component({
  selector: 'page-addEditRoutine',
  templateUrl: 'addEditRoutine.html',
  providers: [[Camera]]
})

export class AddEditRoutinePage {
  activities: Array<Activity> = [];
//  searchActivityQuery: string = '';
  checkedActivities: Array<number> = [];

  imageURL;

  name: string = "";
  description: string = "";
  picture: string = "";

  options: CameraOptions = {
   quality: 100,
   destinationType: this.camera.DestinationType.DATA_URL,
   encodingType: this.camera.EncodingType.JPEG,
   mediaType: this.camera.MediaType.PICTURE,
  //  sourceType: this.camera.PictureSourceType.CAMERA,
   sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
   allowEdit: true
 }

 constructor(private camera:Camera, public navCtrl: NavController, public routineData: RoutineData, public activityData: ActivityData, public toastCtrl: ToastController) {
   activityData.getActivities().then(theActResult => {
     this.activities = theActResult;
     //console.log("AllActivities: activities --> "+this.activities);
     //this.groupActivities(this.activities);
   });
 }

  takePhoto(){
    this.camera.getPicture(this.options).then((imageData) => {
       this.imageURL = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
       console.log(err);
    });
  }

  updateCheckedActivities(value: Activity, checked: boolean){
    // console.log('**** updateCheckedActivities: '+value.name+' '+checked);
    if(checked){
      console.log('updateCheckedActivities append: '+value.name);
      this.checkedActivities.push(value.id);
    } else {
      console.log('updateCheckedActivities remove: '+value.name);
      let indexx = this.checkedActivities.indexOf(value.id);
      this.checkedActivities.splice(indexx,1);
    }
    console.log(this.checkedActivities)
  }

  saveRoutine(nome: string) {
    console.log('saveRoutine: '+this.name);

    this.routineData.appendCustomRoutine([
        this.routineData.getCustomRoutinesCount(),
        this.name,
        Date.toString(),
        this.picture,
        'open',
        this.description,
        this.checkedActivities
      ]);
    this.showToastWithCloseButton();
    //ritorna alla pagina precedente
    // this.navCtrl.push(ActivitiesRoutinePage, {});
    this.navCtrl.pop();
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

  showToastWithCloseButton() {
    const toast = this.toastCtrl.create({
      message: 'Your routine is successfully saved',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }

}
