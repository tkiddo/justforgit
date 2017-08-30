import {Hero} from '../classes/Hero'
import {Logger} from '../services/logger.service'

export class HeroService{
    private heroes:Hero[];
    constructor(private logger:Logger){
        this.heroes=[
            new Hero('king',12),
            new Hero('stan',34)
        ]
    }
    getHeroes(){
        this.logger.log(`there are ${this.heroes.length} heroes`);
    }
}