import { Component } from '@angular/core';
import {HeroService} from './services/hero.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  heroes = [];
  constructor(heroService:HeroService){
    this.heroes = heroService.getHeroes()
  }

}
