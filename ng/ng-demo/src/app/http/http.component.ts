import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/productList').subscribe(
      (data)=>{
        console.log(data)
      }
    )
  }

}
