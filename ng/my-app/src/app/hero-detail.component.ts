import {Component} from '@angular/core';
import {Hero} from './hero'
import {Input} from '@angular/core'

@Component({
    selector:'hero-detail',
    templateUrl:'./hero-detail.component.html',
})

export class HeroDetailComponent{
    @Input() selectedHero:Hero;

}