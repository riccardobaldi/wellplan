import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivitiesRoutinePage } from './activities-list';

@NgModule({
  declarations: [
    ActivitiesRoutinePage,
  ],
  imports: [
    IonicPageModule.forChild(ActivitiesRoutinePage),
  ],
  exports: [
    ActivitiesRoutinePage
  ]
})
export class ActivitiesRoutinePageModule {}
