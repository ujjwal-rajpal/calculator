import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainCalculatorComponent } from "./main-calculator/main-calculator.component";


const routes: Routes = [
    { path: 'calculator', component: MainCalculatorComponent },
    { path: '',
    redirectTo: '/calculator',
    pathMatch: 'full'
  },  
    
]


@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class CalculatorRouteModule{}