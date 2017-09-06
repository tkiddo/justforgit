import { Component, OnInit } from '@angular/core';
import {TodoService} from './todo.service'
import {Todo} from './todo.model'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers:[TodoService]
})
export class TodoComponent implements OnInit {
  todos:Todo[] = [];
  desc = '';
  constructor(private service:TodoService) { }

  ngOnInit() {
  }

  addTodo(){
    this.todos = this.service.addTodo(this.desc);
    this.desc = ''
  }


}
