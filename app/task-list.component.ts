import { Component, EventEmitter } from 'angular2/core';
import { TaskComponent } from './task.component';
import { Task } from './task.model';
import { EditTaskDetailsComponent } from './edit-task-details.component';
import { NewTaskComponent } from './new-task.component';
import {DonePipe} from './done.pipe';
import {PriorityPipe} from './priority.pipe';

// child component of the root component -- used to display a list of tasks
@Component({
  selector: 'task-list',
  inputs: ['taskList'],
  outputs: ['onTaskSelect'],
  directives: [TaskComponent, EditTaskDetailsComponent, NewTaskComponent],
  pipes: [DonePipe, PriorityPipe],
  templateUrl: 'app/task-list.component.html'
})
// creates the var taskList which is an array of Task objects, creates a property to hold the Event Emitter object for our output
export class TaskListComponent {
  public taskList: Task[];
  public onTaskSelect: EventEmitter<Task>;
  public selectedTask: Task;
  public filterDone: string = "notDone";
  public prioritized: string = "Normal";
 constructor() {
   this.onTaskSelect = new EventEmitter();
 }
 //Then in the method, we instantiate a new task object and push it into the existing taskList array. We pass in the new description from the child component, and we get the new unique id number by getting the length of the taskList array.
 taskClicked(clickedTask: Task): void {
   this.selectedTask = clickedTask;
   this.onTaskSelect.emit(clickedTask);
 }
 // take the new description and use it to create a new task.
 createTask(inputs: string[]): void {
   console.log(inputs);
   var description: string = inputs[0];
   var priority: string = inputs[1];
   console.log("in createTask", description, priority);
   this.taskList.push(
     new Task(description, this.taskList.length, priority)
   );
 }
 onChange(filterOption) {
  this.filterDone = filterOption;
  console.log(this.filterDone);
  }
  onPrioritize(priorityOption) {
    this.prioritized = priorityOption;
    console.log(this.prioritized)
  }
}
