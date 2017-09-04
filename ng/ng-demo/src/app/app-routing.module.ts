import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router'
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroParentComponent } from './hero-parent/hero-parent.component';
import { HeroChildComponent } from './hero-child/hero-child.component';
import { VoterComponent } from './voter/voter.component';
import { VotetakerComponent } from './votetaker/votetaker.component';
import {FormsComponent} from './forms/forms.component'
import { CarComponent } from './car/car.component';
import { HttpComponent } from './http/http.component';


const appRoutes:Routes = [
  {path:'herolist',component:HeroListComponent},
  {path:'heroparent',component:HeroParentComponent},
  {path:'car',component:CarComponent},
  {path:'votaker',component:VotetakerComponent},
  {path:'http',component:HttpComponent},
  {path:'form',component:FormsComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
        appRoutes,
        {enableTracing:true}
    )
  ],
  declarations: [],
  exports:[RouterModule]
})
export class RoutingModule { }