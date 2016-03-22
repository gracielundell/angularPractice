import {Component} from 'angular2/core';
import {Task} from './task.model';

@Component({
  selector: 'edit-task-details',
  inputs: ['task'],
  template: `
  <div class="task-form">
    <h3>Edit Description: </h3>
    <input [(ngModel)]="task.description" class="col-sm-8 input-lg task-form"/>
    <select [(ngModel)]="task.priority" class="filter" #userPriority>
      <option value="No">Choose Priority</option>
      <option value="High">High</option>
      <option value="Normal">Normal</option>
      <option value="Low">Low</option>
    </select>
  </div>
  `
})
export class EditTaskDetailsComponent {
  public task: Task;
}
