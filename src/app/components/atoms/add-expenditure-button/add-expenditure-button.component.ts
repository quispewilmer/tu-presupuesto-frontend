import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Expenditure } from 'src/app/expenditure';

@Component({
  selector: 'tp-add-expenditure-button',
  templateUrl: './add-expenditure-button.component.html',
  styleUrls: ['./add-expenditure-button.component.scss']
})
export class AddExpenditureButtonComponent implements OnInit {
  form:FormGroup;

  @Output()
  sendData:EventEmitter<Expenditure> = new EventEmitter<Expenditure>();

  constructor(private formBuilder:FormBuilder) { 
    this.form = this.formBuilder.group({
      date: [''],
      detail: [''],
      cost: ['']
    });
  }

  ngOnInit(): void {
  }

  addExpenditure() {
    console.log(this.form);
    const expenditure:any = {
      date: this.form.get("date")?.value,
      detail: this.form.get("detail")?.value,
      cost: this.form.get("cost")?.value
    }
    this.sendData.emit(expenditure);
  }

  sendDataFromForm(event:any) {
    console.log("Hola mundo");
  }
}
