import {Pipe, PipeTransform} from 'angular2/core';
import {Task} from './task.model';

// @Pipe({
//   name: "priority-pipe",
//   pure: false
// })
// export class PriorityPipe implements PipeTransform {
//   transform(input: Task[], args) {
//     var desiredPriority = args[0];
//     if(desiredPriority === "High") {
//       return input.filter((task) => {
//         return task.priority;
//       });
//     } else if (desiredPriority === "Normal") {
//       return input.filter((task) => {
//         return task.desiredPriority;
//       })
//     }
//   }
// }
