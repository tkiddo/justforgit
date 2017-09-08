import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tstest',
  templateUrl: './tstest.component.html',
  styleUrls: ['./tstest.component.css']
})
export class TstestComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
    
  }
  //枚举类型
  enum(){
    enum Color{red,green,blue};
    let c:Color = Color.blue;
    let colorName:string = Color[1]
    console.log(c);
    console.log(colorName)
  }

  //类型断言
  assert(){
    let someValue:any = 'this is a string';
    let strLength:number = (<string>someValue).length;
    console.log(strLength)
  }

  let(condition){
    if(condition){
      let value = 'blue';
      return value
    }else{
      return null
    }

    // const name = 'sdf';
  }

}
