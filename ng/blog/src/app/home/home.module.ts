import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {BottomComponent} from '../bottom/bottom.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent,BottomComponent],
  exports:[HomeComponent]
})
export class HomeModule { }
