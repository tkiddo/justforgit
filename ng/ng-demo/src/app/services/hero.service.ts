import {Hero} from '../classes/Hero'
// import {Logger} from '../services/logger.service'

export class HeroService{
    private heroes:Hero[];
    constructor(){
        this.heroes=[
            new Hero('king',12),
            new Hero('stan',34)
        ]
    }
    getHeroes(){
        return this.heroes
    }
}