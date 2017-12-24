import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CodeOfConductPage } from '../pages/code-of-conduct/code-of-conduct';
import { LoginPage } from '../pages/login/login';

import { RoutinesActivitiesTabs } from '../pages/routinesActivitiesTabs/routinesActivitiesTabs';

import { The6HumanNeedsPage } from '../pages/the6human-needs/the6human-needs';
import { UltimateVisionPurposePage } from '../pages/ultimate-vision-purpose/ultimate-vision-purpose';
import { UltimateVisionPage } from '../pages/ultimate-vision/ultimate-vision';
import { UltimatePurposePage } from '../pages/ultimate-purpose/ultimate-purpose';
import { EmotionalFloodPage } from '../pages/emotional-flood/emotional-flood';

import { RoutineData } from './providers/routine-data';
import { ActivityData } from './providers/activity-data';

import { HomePage } from '../pages/home/home';

import { Minutes5JournalPage } from '../pages/minutes5-journal/minutes5-journal';
import { PersProfCategoriesPage } from '../pages/pers-prof-categories/pers-prof-categories';
import { QuarterlyGoalsPage } from '../pages/quarterly-goals/quarterly-goals';
import { OutcomeOrganizerPage } from '../pages/outcome-organizer/outcome-organizer';
import { WeeklyPlannerPage } from '../pages/weekly-planner/weekly-planner';
import { QualityQuantifierPage } from '../pages/quality-quantifier/quality-quantifier';
import { AffirmationsPage } from '../pages/affirmations/affirmations';
import { TrainingExplanationPage } from '../pages/training-explanation/training-explanation';
import { SupplementsHomeopathyPage } from '../pages/supplements-homeopathy/supplements-homeopathy';
import { MoodmeterPage } from '../pages/moodmeter/moodmeter';
import { WeightDiaryPage } from '../pages/weight-diary/weight-diary';
import { FoodDiaryPage } from '../pages/food-diary/food-diary';
import { CommunicationPlanPage } from '../pages/communication-plan/communication-plan';
import { DecisionMakingProcessPage } from '../pages/decision-making/decision-making';

import { ListsPage } from '../pages/todoList/lists/lists';

//import { RoutinesPage } from '../pages/activityList/routines/routines';
import { ActivitiesListTabs } from '../pages/activityList/activitiesListTabs';

@Component({
  templateUrl: 'app.html',
  providers: [ RoutineData, ActivityData ]
})

export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public routineData: RoutineData, public activityData: ActivityData) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    routineData.load();
    activityData.load();
  }

  goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }

  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LoginPage);
  }

  goToActivityCheckList(params){
    if (!params) params = {};
    this.navCtrl.setRoot(RoutinesActivitiesTabs);
  }

  goToRoutinesList(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ActivitiesListTabs); //RoutinesPage);
  }

  goToCodeOfConduct(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CodeOfConductPage);
  }

  goToThe6HumanNeeds(params){
    if (!params) params = {};
    this.navCtrl.setRoot(The6HumanNeedsPage);
  }

  goToUltimateVisionPurpose(params){
    if (!params) params = {};
    this.navCtrl.setRoot(UltimateVisionPurposePage);
  }

  goToUltimateVision(params){
    if (!params) params = {};
    this.navCtrl.setRoot(UltimateVisionPage);
  }

  goToUltimatePurpose(params){
    if (!params) params = {};
    this.navCtrl.setRoot(UltimatePurposePage);
  }

  goToEmotionalFlood(params){
    if (!params) params = {};
    this.navCtrl.setRoot(EmotionalFloodPage);
  }

  goTo5MinutesJournal(params){
    if (!params) params = {};
    this.navCtrl.setRoot(Minutes5JournalPage);
  }

  goToPersProfCategories(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PersProfCategoriesPage);
  }

  goToQuarterlyGoals(params){
    if (!params) params = {};
    this.navCtrl.setRoot(QuarterlyGoalsPage);
  }

  goToOutcomeOrganizerPage(params){
    if (!params) params = {};
    this.navCtrl.setRoot(OutcomeOrganizerPage);
  }

  goToWeeklyPlannerPage(params){
    if (!params) params = {};
    this.navCtrl.setRoot(WeeklyPlannerPage);
  }

  goToQualityQuantifierPage(params){
    if (!params) params = {};
    this.navCtrl.setRoot(QualityQuantifierPage);
  }

  goToAffirmationsPage(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AffirmationsPage);
  }

  goToTrainingExplanationPage(params){
    if (!params) params = {};
    this.navCtrl.setRoot(TrainingExplanationPage);
  }

  goToSupplementsHomeopathyPage(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SupplementsHomeopathyPage);
  }

  goToMoodmeterPage(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MoodmeterPage);
  }

  goToWeightDiaryPage(params){
    if (!params) params = {};
    this.navCtrl.setRoot(WeightDiaryPage);
  }

  goToFoodDiaryPage(params){
    if (!params) params = {};
    this.navCtrl.setRoot(FoodDiaryPage);
  }

  goToCommunicationPlanPage(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CommunicationPlanPage);
  }

  goToDecisionMakingProcessPage(params){
    if (!params) params = {};
    this.navCtrl.setRoot(DecisionMakingProcessPage);
  }

  goToTasksTodoPage(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ListsPage);
  }


}
