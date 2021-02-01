import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-calculator',
  templateUrl: './main-calculator.component.html',
  styleUrls: ['./main-calculator.component.scss']
})
export class MainCalculatorComponent implements OnInit {
  equation:string ='';
  result:number;
  constructor() { }

  ngOnInit(): void {
  }
  /**
   * used to insert values 
   * @param value 
   */
  insertValue(value){
    if(value === '='){
      this.equation =  this.result.toString();
      this.result= null;
      return;
    }
    this.equation = this.equation+value;
    let res = eval(this.equation);
    if(res != this.equation){
      this.result = res;
    }
  }
  /**
   * used to insert operator
   * @param value 
   */
  insertOperator(value){
    this.equation = this.equation+value;
    this.result= null;
  }
  /**
   * fuctionality of cancel button
   */
  cancelOperator(){
    this.equation = '';
    this.result = null;
  }

  deleteLastChar(){
    if(this.equation == ''){
      return
    }
    this.equation = this.equation.slice(0,-1);
    
    
    
  }
}
