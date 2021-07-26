import { Component, Input, OnInit } from '@angular/core';
import { Expenditure } from 'src/app/expenditure';
import { ExpenditureService } from 'src/app/services/expenditure.service';

@Component({
  selector: 'tp-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  expenditures:Expenditure[] = [
  ];

  constructor(
    private _expenditureService: ExpenditureService
    ) {
    
  }

  getExpenditures() {
    this._expenditureService.getListExpenditures().subscribe(data => {
      this.expenditures = data;
    }, err => {
      console.log(err);
    })
  }

  ngOnInit(): void {
    this.getExpenditures();
  }

  addExpenditure(event:Expenditure) {
    this._expenditureService.saveExpenditure([event]).subscribe(data => {
      this.getExpenditures();
    }, err => {
      console.log(err);
    })
  }

  editExpenditure(event:any) {
    
  }
}
