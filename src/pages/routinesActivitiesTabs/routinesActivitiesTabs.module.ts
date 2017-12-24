import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { RoutinesActivitiesTabs } from './routinesActivitiesTabs';

@NgModule({
  declarations: [
    RoutinesActivitiesTabs
  ],
  imports: [
    IonicPageModule.forChild(RoutinesActivitiesTabs),
  ],
  exports: [
    RoutinesActivitiesTabs
  ]
})
export class RoutinesActivitiesTabsModule {}
