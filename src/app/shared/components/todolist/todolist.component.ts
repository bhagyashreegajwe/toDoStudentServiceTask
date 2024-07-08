import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../models/todo.interface';
import { TodoserviceService } from '../../services/todoservice.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  todoArr !:Array<Itodo>
  constructor(
    private _todoservice : TodoserviceService
  ) { }

  ngOnInit(): void {
    this.todoArr = this._todoservice.fetchAllData()
  }

  onDelete(todoId:string){
    this._todoservice.deleteToDoItem(todoId)
  }

}
