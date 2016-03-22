import { Component } from 'angular2/core';
import { Task } from './task.model';

// child component of task-list component to display one task
@Component({
    selector: 'task-display',
    inputs: ['task'],
  template: `
    <h3>{{ task.description }}</h3>
  `
})
export class TaskComponent {
  public task: Task;
}
