import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { Expenditure } from 'src/app/expenditure';

@Component({
  selector: 'tp-add-expenditure-button',
  templateUrl: './add-expenditure-button.component.html',
  styleUrls: ['./add-expenditure-button.component.scss']
})
export class AddExpenditureButtonComponent implements OnInit {
  form:FormGroup;
  id: number | undefined;

  @Input()
  idToEdit: number = 0;

  @Output()
  addExpenditure:EventEmitter<Expenditure> = new EventEmitter<Expenditure>();

  constructor(private formBuilder:FormBuilder) { 
    this.form = this.formBuilder.group({
      date: [''],
      detail: [''],
      cost: ['']
    });
  }

  ngOnInit(): void {
  }

  addExpenditureF() {
    const expenditure:any = {
      date: this.form.get("date")?.value,
      detail: this.form.get("detail")?.value,
      cost: this.form.get("cost")?.value
    };
    this.addExpenditure.emit(expenditure);
  }

  updateExpenditureF(expenditure: any) {
    this.addExpenditure.emit(expenditure)
  }
}
