import { Injectable, Pipe } from '@angular/core';
import { ActivityModel } from '../shared/activity-model';

/*
  Generated class for the DoneTodosPipe pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'doneActivitiesPipe'
})
@Injectable()
export class DoneActivitiesPipe {
  /*
    Takes a value and makes it lowercase.
   */
  transform(todos: ActivityModel[]) {
    //FIXME return todos.filter(todo => todo.isDone);
  }
}
