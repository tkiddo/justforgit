import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {BottomComponent} from '../bottom/bottom.component'
import {TopComponent} from '../top/top.component'
import {BlogService} from '../services/blog.service'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent,BottomComponent,TopComponent],
  exports:[HomeComponent],
  providers:[BlogService]
})
export class HomeModule { }
