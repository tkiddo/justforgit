import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroParentComponent } from './hero-parent/hero-parent.component';
import { HeroChildComponent } from './hero-child/hero-child.component';
import { VoterComponent } from './voter/voter.component';
import { VotetakerComponent } from './votetaker/votetaker.component';
import {HighLightDirective} from './directive/highlight.directive';
import {HeroService} from './services/hero.service'
// import {UserListComponent} from './forms/user-list/user-list.component'
// import {UserService} from './services/user.service'

import {MyFormsModule} from './forms/forms.module'

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroParentComponent,
    HeroChildComponent,
    VoterComponent,
    VotetakerComponent,
    HighLightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MyFormsModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
