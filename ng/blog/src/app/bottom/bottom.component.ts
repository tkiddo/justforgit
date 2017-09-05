import { Component, OnInit ,Input} from '@angular/core';
import {MenuService} from './menu.service'
import {Menu} from '../class/menu'
import {Router} from '@angular/router'

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.scss'],
  providers:[MenuService]
})
export class BottomComponent implements OnInit {
  menu:Menu[];
  constructor(private menuService:MenuService) { 
    this.menu = menuService.getMenu()
  }
  @Input() active:number

  ngOnInit() {
    
  }



}
