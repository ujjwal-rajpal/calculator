import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCalculatorComponent } from './main-calculator.component';

describe('MainCalculatorComponent', () => {
  let component: MainCalculatorComponent;
  let fixture: ComponentFixture<MainCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
