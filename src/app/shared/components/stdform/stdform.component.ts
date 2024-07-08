import { Component, OnInit, ViewChild } from '@angular/core';
import { StdserviceService } from '../../services/stdservice.service';
import { NgForm } from '@angular/forms';
import { UuidService } from '../../services/uuid.service';

@Component({
  selector: 'app-stdform',
  templateUrl: './stdform.component.html',
  styleUrls: ['./stdform.component.scss']
})
export class StdformComponent implements OnInit {
  @ViewChild('stdform') stdform !:NgForm
  constructor(
    private _stdService : StdserviceService,
    private _uuidService : UuidService
  ) { }

  ngOnInit(): void {
  }

  onStudentAdd(){
    if(this.stdform.valid){
      let newstd = {...this.stdform.value, id:this._uuidService.uuid()}
      this._stdService.addNewStd(newstd)
      this.stdform.reset()
    }    
  }
}
