/**angular imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


/**shared folder imports */
import { SharedModule } from "../shared/shared.module";
/** its own imports */
import { MainCalculatorComponent } from './main-calculator/main-calculator.component';
import { CalculatorRouteModule } from './calculator-routing.module'


@NgModule({
  declarations: [MainCalculatorComponent],
  imports: [
    CommonModule,
    SharedModule,
    CalculatorRouteModule,
    
  ]
})
export class CalculatorModule { }

