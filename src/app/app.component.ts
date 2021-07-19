import { Component } from '@angular/core';
import { Task } from './task/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kanban-fire';
  todo : Task[]=[
    {title:'Buy Milk',description:'Go to store and buy Milk'},
    {title:'Buy Bread',description:'Go to store and buy Bread'}
  ];
}
