import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ActivitiesListTabs } from './activitiesListTabs';

@NgModule({
  declarations: [
    ActivitiesListTabs
  ],
  imports: [
    IonicPageModule.forChild(ActivitiesListTabs),
  ],
  exports: [
    ActivitiesListTabs
  ]
})
export class ActivitiesListTabsModule {}
