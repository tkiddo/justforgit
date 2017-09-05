import {Injectable} from '@angular/core'
import {Blog} from '../class/blog'
import {HttpClient} from '@angular/common/http'
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';

interface response{
    results:string[]
}
@Injectable()
export class BlogService{
    constructor(private http:HttpClient){}
    getBlogs () {
        this.http.get<response>('http://localhost:8000/blog').subscribe(
            (res)=>{
                console.log(res)
            }
        )

    }
}