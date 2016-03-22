// responsible for presenting a form with a text field for the task description, and a button to submit the information and create the new Task object

import {Component, EventEmitter} from 'angular2/core';
import {Task} from './task.model';

@Component({
  selector: 'new-task',
  outputs: ['onSubmitNewTask'],
  template: `
  <div class="task-form">
    <h3>Create Task:</h3>
    <input placeholder="Description" class="col-sm-8 input-lg" #newDescription>
    <select class="filter" #userPriority>
      <option value="No">Choose Priority</option>
      <option value="High">High</option>
      <option value="Normal">Normal</option>
      <option value="Low">Low</option>
    </select>
    <button (click)="addTask(newDescription, userPriority)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})
export class NewTaskComponent {
  // instatiates the event emitter
  public onSubmitNewTask: EventEmitter<String[]>;
  // public prioritized: string = "all";
  constructor(){
    this.onSubmitNewTask = new EventEmitter();
  }
  addTask(userDescription: HTMLInputElement, userPriority: HTMLSelectElement){
    var values = [userDescription.value, userPriority.value];
    this.onSubmitNewTask.emit(values);
    userDescription.value="";
    userPriority.value="";
  }
}
