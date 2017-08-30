import { Component, OnInit } from '@angular/core';
import {Hero} from '../classes/Hero'
import {Logger} from '../services/logger.service'

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
  providers:[Logger]
})

export class HeroListComponent implements OnInit {
  heroes:Hero[]

  constructor(private logger:Logger) {
    this.heroes = [
      new Hero('king',2),
      new Hero('sting',34)
    ]
    
   }

  ngOnInit() {
    this.logger.log(this.heroes);
  }

}
