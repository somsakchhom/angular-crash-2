import { Component, Input } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  // conflict with video @39:04, added '!' operator skips the null and undefined checks, makes it non-nullable. Use with caution.
  @Input() task!: Task;

}
