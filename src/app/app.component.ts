import { Component } from '@angular/core';
import { Task } from './task/task';
import { CdkDragDrop, DragDrop, transferArrayItem } from '@angular/cdk/drag-drop';

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
  inProgress: Task[]=[];
  done: Task[]=[];
  drop(event: CdkDragDrop<Task[]>): void{
    if(event.previousContainer===event.container){
      return;
    }
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );

  }
  edit(list : string, task: Task): void{
    
  }
}
