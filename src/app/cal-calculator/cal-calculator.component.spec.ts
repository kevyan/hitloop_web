import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalCalculatorComponent } from './cal-calculator.component';

describe('CalCalculatorComponent', () => {
  let component: CalCalculatorComponent;
  let fixture: ComponentFixture<CalCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
