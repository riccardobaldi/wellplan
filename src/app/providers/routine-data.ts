import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Storage } from '@ionic/storage';

import { Routine } from '../../app/interfaces/routine';

@Injectable()
export class RoutineData {
  data: any = null;
  customData: any = null;

  constructor(public http: Http, public storage: Storage) {
    storage.ready().then(() => {
      });
  }

  load() { // Load factory routines
    // check if the JSON data had been loaded and saved into the data variable
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get('assets/data/routines.json')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });

        //ciclare sullo storage per caricare le routine custom
        this.storage.get('customData').then((customArray) => {
          console.log('Carico Routine: ' + customArray + ' !!!');
          if(customArray === null) return;
          this.data.push(<Routine>customArray)
        });
    });

  }

  getRoutines() {
    return this.load().then(data => {
      return data;
    });
  }

  // onchange() {
  //   this.saveCustomRoutines();
  // }

  appendCustomRoutine(routine: any) {
      // this.storage.set('key', 'value').then(function () {
      //   return this.storage.get('key');
      // }).then(function (value) {
      //   // we got our value
      // }).catch(function (err) {
      //   // we got an error
      // });
    this.storage.set('customData', routine);
  }

  loadLastCustomRoutine() {
    this.storage.get('customData').then((routineVal) => {
      console.log('Last Routine: ' + routineVal + '!!!');
    });
  }

  getCustomRoutinesCount(): number {
    return this.storage.keys.length;
  }

}
