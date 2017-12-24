import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UltimateVisionPage } from '../ultimate-vision/ultimate-vision';
import { UltimatePurposePage } from '../ultimate-purpose/ultimate-purpose';

@Component({
  selector: 'page-ultimate-vision-purpose',
  templateUrl: 'ultimate-vision-purpose.html'
})
export class UltimateVisionPurposePage {

  constructor(public navCtrl: NavController) {
  }
  goToUltimateVision(params){
    if (!params) params = {};
    this.navCtrl.push(UltimateVisionPage);
  }goToUltimatePurpose(params){
    if (!params) params = {};
    this.navCtrl.push(UltimatePurposePage);
  }
}
