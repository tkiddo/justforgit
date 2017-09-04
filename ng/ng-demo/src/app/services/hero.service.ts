import {Injectable} from  '@angular/core'
import {HEROES} from '../hero-list/mock-hero'

@Injectable()
export class HeroService{
    
    getHeroes(){
        return HEROES
    }
}