import { Component, OnInit ,Input} from '@angular/core';
import {Hero} from '../classes/Hero'

@Component({
  selector: 'app-hero-child',
  templateUrl: './hero-child.component.html',
  styleUrls: ['./hero-child.component.css']
})
export class HeroChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  private _master:string;
  @Input() hero:Hero;
  // @Input() master:string;
  @Input()
  set master(name:string){
    this._master = name || 'no master'
  }
  get master(){
    return this._master
  }

}
