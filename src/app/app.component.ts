import { Component } from '@angular/core';
import { Task } from './task/task';

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
}
