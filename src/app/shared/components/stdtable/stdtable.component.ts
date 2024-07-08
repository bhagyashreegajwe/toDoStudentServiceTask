import { Component, OnInit } from '@angular/core';
import { StdserviceService } from '../../services/stdservice.service';
import { Istd } from '../../models/std.interface';

@Component({
  selector: 'app-stdtable',
  templateUrl: './stdtable.component.html',
  styleUrls: ['./stdtable.component.scss']
})
export class StdtableComponent implements OnInit {

  stdArr !: Array<Istd>
  constructor(
    private _stdService : StdserviceService
  ) { }

  ngOnInit(): void {
    this.stdArr = this._stdService.fetchAllStudents()
  }

  onDelete(id: string){
    this._stdService.deleteStd(id)
  }


}
