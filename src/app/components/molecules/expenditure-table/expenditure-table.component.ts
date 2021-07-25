import { hostViewClassName } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Expenditure } from 'src/app/expenditure';

@Component({
  selector: 'tp-expenditure-table',
  templateUrl: './expenditure-table.component.html',
  styleUrls: ['./expenditure-table.component.scss']
})
export class ExpenditureTableComponent implements OnInit {

  @Input()
  expenditures: Expenditure[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
