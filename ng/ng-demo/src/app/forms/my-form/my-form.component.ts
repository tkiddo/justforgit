import { Component, OnInit} from '@angular/core';
import {Person} from '../../classes/Person'

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let myPerson = new Person(42,'sdf','fatcg','sddsdf');
    console.log(myPerson)
  }
  values = '';
  onKey(event:KeyboardEvent){
    this.values += (<HTMLInputElement>event.target).value+'|'
  }

  powers = ['really smart','super flexible','super hot','weather changer'];

  model = new Person(18,'dr iq',this.powers[0],'chuck overstreet');
  submitted = false;
  onSubmit(){
    this.submitted = true;
    console.log(this.model)

  }

  get diagnostic(){
    return JSON.stringify(this.model)
  }
  

}
