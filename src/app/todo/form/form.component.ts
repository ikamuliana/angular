import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() newTaskEvent= new EventEmitter<Todo> ()

  task : string = ""
  category: string = ""
  image: string = ""

  constructor() { }

  addTodo(form: NgForm) {
    const { task, category } = form.value
    const newTodo = new Todo(task, category)
    this.newTaskEvent.emit(newTodo)
    // console.log(newTodo)
  }

}
