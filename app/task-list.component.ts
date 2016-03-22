import { Component, EventEmitter } from 'angular2/core';
import { TaskComponent } from './task.component';

import { Task } from './task.model';

// child component of the root component -- used to display a list of tasks
@Component({
  selector: 'task-list',
  inputs: ['taskList'],
  outputs: ['onTaskSelect'],
  directives: [TaskComponent],
  template: `
  <task-display *ngFor="#currentTask of taskList"           (click)="taskClicked(currentTask)"
  [class.selected]="currentTask === selectedTask"
  [task]="currentTask">
  </task-display>
  `
})
// creates the var taskList which is an array of Task objects, creates a property to hold the Event Emitter object for our output
export class TaskListComponent {
  public taskList: Task[];
  public onTaskSelect: EventEmitter<Task>;
  public selectedTask: Task;
 constructor() {
   this.onTaskSelect = new EventEmitter();
 }
}
