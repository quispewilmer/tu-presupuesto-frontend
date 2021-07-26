import { hostViewClassName } from '@angular/compiler';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Expenditure } from 'src/app/expenditure';
import { ExpenditureService } from 'src/app/services/expenditure.service';

@Component({
  selector: 'tp-expenditure-table',
  templateUrl: './expenditure-table.component.html',
  styleUrls: ['./expenditure-table.component.scss']
})
export class ExpenditureTableComponent implements OnInit {

  @Input()
  expenditures: Expenditure[] = [];

  @Output()
  edit:EventEmitter<Expenditure> = new EventEmitter<Expenditure>();

  constructor(
    private _expenditureService: ExpenditureService
  ) { }

  ngOnInit(): void {
  }

  getExpenditures() {
    this._expenditureService.getListExpenditures().subscribe(data => {
      this.expenditures = data;
    }, err => {
      console.log(err);
    })
  }

  deleteExpenditure(id:number) {
    this._expenditureService.deleteExpenditures(id).subscribe(data => {
      this.getExpenditures();
    }, err => {
      console.log(err);
    });
  }

  updateExpenditure(id:number) {
    console.log(id);
  }
}
