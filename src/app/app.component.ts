import { Component } from '@angular/core';
import { Todo } from './models/todo'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appForm';
  todos : Todo [] = []

  addTodo(newTodo: Todo) {
    this.todos.push(newTodo)
  }
}
