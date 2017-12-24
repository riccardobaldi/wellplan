import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ActivitiesRoutinesPage } from '../pages/routinesActivitiesTabs/activities-routines/activities-routines';
import { ActivitiesRoutinePage } from '../pages/routinesActivitiesTabs/activities-list/activities-list';
import { AllActivitiesPage } from '../pages/routinesActivitiesTabs/allActivities/allActivities';
import { RoutinesActivitiesTabs } from '../pages/routinesActivitiesTabs/routinesActivitiesTabs';
import { AddEditRoutinePage } from '../pages/routinesActivitiesTabs/addEditRoutine/addEditRoutine';

import { CodeOfConductPage } from '../pages/code-of-conduct/code-of-conduct';
import { PagePage } from '../pages/page/page';
import { LoginPage } from '../pages/login/login';

import { UltimateVisionPage } from '../pages/ultimate-vision/ultimate-vision';
import { UltimatePurposePage } from '../pages/ultimate-purpose/ultimate-purpose';
import { The6HumanNeedsPage } from '../pages/the6human-needs/the6human-needs';
import { UltimateVisionPurposePage } from '../pages/ultimate-vision-purpose/ultimate-vision-purpose';
import { EmotionalFloodPage } from '../pages/emotional-flood/emotional-flood';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { NativeStorage } from '@ionic-native/native-storage';
import { IonicStorageModule } from '@ionic/storage';
import { SQLite } from '@ionic-native/sqlite';

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

import { DatabaseService } from './providers/database-service';

import { TodosPage } from '../pages/todoList/todos/todos';
import { ListsPage } from '../pages/todoList/lists/lists';
import { AddTaskModalPage } from '../pages/todoList/add-task-modal/add-task-modal';
import { TodoService } from '../pages/todoList/shared/todo-service';
import { ListsService } from '../pages/todoList/shared/lists-service';
import { PrioritizedTodosPipe } from '../pages/todoList/pipes/prioritized-todos-pipe';
import { DoneTodosPipe } from '../pages/todoList/pipes/done-todos-pipe';

import { RoutinesPage } from '../pages/activityList/routines/routines';
import { RoutinesService } from '../pages/activityList/shared/routines-service';
import { ActivitiesListTabs } from '../pages/activityList/activitiesListTabs';
import { ActivitiesPage } from '../pages/activityList/activities/activities';
import { ActivityService} from '../pages/activityList/shared/activity-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RoutinesActivitiesTabs, ActivitiesRoutinesPage, ActivitiesRoutinePage, AddEditRoutinePage, AllActivitiesPage,
    ActivitiesListTabs, RoutinesPage, ActivitiesPage,
    CodeOfConductPage,
    PagePage,
    LoginPage,
    UltimateVisionPage,
    UltimatePurposePage,
    The6HumanNeedsPage,
    UltimateVisionPurposePage,
    EmotionalFloodPage,
    Minutes5JournalPage,
    PersProfCategoriesPage,
    QuarterlyGoalsPage,
    OutcomeOrganizerPage,
    WeeklyPlannerPage,
    QualityQuantifierPage,
    AffirmationsPage,
    TrainingExplanationPage,
    SupplementsHomeopathyPage,
    MoodmeterPage,
    WeightDiaryPage,
    FoodDiaryPage,
    CommunicationPlanPage,
    DecisionMakingProcessPage,
    TodosPage, ListsPage, AddTaskModalPage, PrioritizedTodosPipe, DoneTodosPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RoutinesActivitiesTabs, ActivitiesRoutinesPage, ActivitiesRoutinePage, AddEditRoutinePage, AllActivitiesPage,
    ActivitiesListTabs, RoutinesPage, ActivitiesPage,
    CodeOfConductPage,
    PagePage,
    LoginPage,
    UltimateVisionPage,
    UltimatePurposePage,
    The6HumanNeedsPage,
    UltimateVisionPurposePage,
    EmotionalFloodPage,
    Minutes5JournalPage,
    PersProfCategoriesPage,
    QuarterlyGoalsPage,
    OutcomeOrganizerPage,
    WeeklyPlannerPage,
    QualityQuantifierPage,
    AffirmationsPage,
    TrainingExplanationPage,
    SupplementsHomeopathyPage,
    MoodmeterPage,
    WeightDiaryPage,
    FoodDiaryPage,
    CommunicationPlanPage,
    DecisionMakingProcessPage,
    TodosPage, ListsPage, AddTaskModalPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StatusBar,
    SplashScreen,
    TodoService, ListsService,
    RoutinesService, ActivityService,
    SQLite,
    DatabaseService
  ]
})
export class AppModule {}
