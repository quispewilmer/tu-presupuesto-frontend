import { Component, Input, OnInit } from '@angular/core';
import { Expenditure } from 'src/app/expenditure';

@Component({
  selector: 'tp-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  expenditures:Expenditure[] = [
    {
      id: 1,
      date: "24/24/24",
      detail: "Hi world",
      cost: 23
    },{
      id: 1,
      date: "24/24/24",
      detail: "Hi world",
      cost: 23
    },{
      id: 1,
      date: "24/24/24",
      detail: "Hi world",
      cost: 23
    },{
      id: 1,
      date: "24/24/24",
      detail: "Hi world",
      cost: 23
    },{
      id: 1,
      date: "24/24/24",
      detail: "Hi world",
      cost: 23
    },{
      id: 1,
      date: "24/24/24",
      detail: "Hi world",
      cost: 23
    },{
      id: 1,
      date: "24/24/24",
      detail: "Hi world",
      cost: 23
    },{
      id: 1,
      date: "24/24/24",
      detail: "Hi world",
      cost: 23
    },{
      id: 1,
      date: "24/24/24",
      detail: "Hi world",
      cost: 23
    },{
      id: 1,
      date: "24/24/24",
      detail: "Hi world",
      cost: 23
    },{
      id: 1,
      date: "24/24/24",
      detail: "Hi world",
      cost: 23
    },{
      id: 1,
      date: "24/24/24",
      detail: "Hi world",
      cost: 23
    },{
      id: 1,
      date: "24/24/24",
      detail: "Hi world",
      cost: 23
    },{
      id: 1,
      date: "24/24/24",
      detail: "Hi world",
      cost: 23
    },{
      id: 1,
      date: "24/24/24",
      detail: "Hi world",
      cost: 23
    },{
      id: 1,
      date: "24/24/24",
      detail: "Hi world",
      cost: 23
    },{
      id: 1,
      date: "24/24/24",
      detail: "Hi world",
      cost: 23
    },{
      id: 1,
      date: "24/24/24",
      detail: "Hi world",
      cost: 23
    },{
      id: 1,
      date: "24/24/24",
      detail: "Hi world",
      cost: 23
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
