import { Injectable } from '@angular/core';
import { Itodo } from '../models/todo.interface';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {
  toDoArr: Array<Itodo> = [
    {
      todoitem: "HTML",
      id:'00123'
    }
  ]
  constructor(
    private _snackbar: SnackbarService
  ) { }

  fetchAllData(){
    return this.toDoArr;
  }

  createNewTodoItem(newtodo: Itodo){
    this.toDoArr.push(newtodo)
  }

  deleteToDoItem(id:string){
    let deleteIndex = this.toDoArr.findIndex(todo => todo.id === id)
    this.toDoArr.splice(deleteIndex)
    this._snackbar.openSnackBar('Student Deleted Successfully !!!')
  }
  
}
