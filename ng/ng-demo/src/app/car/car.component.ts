import { Component, OnInit } from '@angular/core';
import {Car} from '../classes/Car'
import {Engine} from '../classes/Engine'

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let car = new Car(new Engine(12));
    console.log(car)
  }

}
