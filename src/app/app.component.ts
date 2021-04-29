import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { Task } from './task/task';
import { MatDialog } from '@angular/material/dialog';
import {
  TaskDialogComponent,
  TaskDialogResult,
} from './task-dialog/task-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todo: Task[] = [
    {
      title: 'Finish Projects',
      description: 'Many commits',
    },
    {
      title: 'Feed Cats',
      description: 'Go to store and buy cat food',
    },
    {
      title: 'Learn piano',
      description: 'Attend Piano lessons',
    },
    {
      title: 'Find a job',
      description: 'invert binary trees',
    },
  ];
  inProgress: Task[] = [];
  done: Task[] = [];
  constructor(private dialog: MatDialog) {}

  drop(event: CdkDragDrop<Task[]>): void {
    if (event.previousContainer === event.container) return;
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }
  edit(list: string, task: Task): void {}

  newTask() {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '270px',
      data: { task: {} },
    });
    dialogRef
      .afterClosed()
      .subscribe((result: TaskDialogResult) => this.todo.push(result.task));
  }
}
