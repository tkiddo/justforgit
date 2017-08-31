import { Component, OnInit } from '@angular/core';
import {Hero} from '../classes/Hero'

@Component({
  selector: 'app-hero-parent',
  templateUrl: './hero-parent.component.html',
  styleUrls: ['./hero-parent.component.css']
})
export class HeroParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  heroes = [
    new Hero('king',11),
    new Hero('jing',34)
  ]
  master = 'John';
  color = 'blue'

}
