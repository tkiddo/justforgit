import { Component, OnInit } from '@angular/core';
import {BlogService} from '../services/blog.service'
import {Blog} from '../class/blog'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  activeIndex:number = 0;
  blogs:Array<Blog>;
  constructor(private blogService:BlogService) {
   }

  ngOnInit() {
    this.loadData()
    
  }

  public loadData(){
    this.blogService.getBlogs()
  }

}
