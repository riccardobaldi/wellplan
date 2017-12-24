import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

import { ActivityModel } from '../shared/activity-model';

/*
  Generated class for the AddTaskModal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-activity-modal',
  templateUrl: 'add-activity-modal.html'
})
export class AddActivityModalPage {

  public model:ActivityModel;
  public title:string = "Add new task";
  public buttonText:string = "ADD";

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    if(this.navParams.get('todo')){
      this.model = ActivityModel.clone(this.navParams.get('todo'));
      this.title = "Edit task";
      this.buttonText = "Save changes";
    }
    else{
      //let listId = this.navParams.get('listId');
      //FIXME this.model = new ActivityModel('', listId);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTaskModalPage');
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  submit(){
    this.viewCtrl.dismiss(this.model);
  }

}
