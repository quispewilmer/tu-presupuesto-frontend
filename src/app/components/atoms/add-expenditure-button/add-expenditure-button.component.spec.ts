import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpenditureButtonComponent } from './add-expenditure-button.component';

describe('AddExpenditureButtonComponent', () => {
  let component: AddExpenditureButtonComponent;
  let fixture: ComponentFixture<AddExpenditureButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExpenditureButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExpenditureButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
