import { Injectable } from '@angular/core';
import { Istd } from '../models/std.interface';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class StdserviceService {
  stdlist:Array<Istd> = [
    {
      fname:"John",
      lname:"Doe",
      contact:"9652364521",
      email:"jdoe@gmail.com",
      id:'123'
    },
    // {
    //   fname:"Joe",
    //   lname:"Doe",
    //   contact:"9452145612",
    //   email:"joedoe@gmail.com",
    //   id:'456'
    // }
  ]
  constructor(
    private _snackbar : SnackbarService
  ) { }

  fetchAllStudents(){
    return this.stdlist
  }

  addNewStd(newstd:Istd){
    this.stdlist.push(newstd)
  }

  deleteStd(id:string){
    let deleteIndex = this.stdlist.findIndex(ele => ele.id === id)
    this.stdlist.splice(deleteIndex, 1)
    this._snackbar.openSnackBar('Student Deleted Successfully !!!')
  }
}
