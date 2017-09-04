import { Component, OnInit } from '@angular/core';
import {Hero} from '../classes/Hero'
import {Logger} from '../services/logger.service'
import {HeroService} from '../services/hero.service'

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
  providers:[Logger,HeroService]
})

export class HeroListComponent implements OnInit {
  heroes:Hero[]

  constructor(private logger:Logger,private heroService:HeroService) {
    this.heroes = heroService.getHeroes()
    
   }

  ngOnInit() {
    this.logger.log(this.heroes);
  }

}
