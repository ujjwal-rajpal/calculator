/**
 * created by: ujjwal
 * modified by: ujjwal
 * purpose: to define routing
 * created on: 05th jan, 2020
 * 
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
    { path: '', loadChildren: ()=> import('./calculator/calculator.module').then(m=>m.CalculatorModule ) },
  ];
  
  @NgModule({
      imports:[RouterModule.forRoot(routes)],
      exports:[RouterModule]
  })
  
  export class AppRoutingModule{}