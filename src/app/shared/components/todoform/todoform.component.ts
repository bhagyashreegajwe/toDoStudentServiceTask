import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoserviceService } from '../../services/todoservice.service';
import { NgForm } from '@angular/forms';
import { Itodo } from '../../models/todo.interface';
import { UuidService } from '../../services/uuid.service';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.scss']
})
export class TodoformComponent implements OnInit {
  @ViewChild('todoform') todoform !:NgForm
  constructor(
    private _todoservice : TodoserviceService,
    private _uuidservice : UuidService
  ) { }

  ngOnInit(): void {
  }

  addToDoItem(){
    if(this.todoform.valid){
      let todo:Itodo = {...this.todoform.value, id:this._uuidservice.uuid()}
      this._todoservice.createNewTodoItem(todo)
      this.todoform.reset()
    }
  }

}
