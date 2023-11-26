import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient:HttpClient,private config:ConfigService) { }
  getAllPost(page =1){
    return this.httpClient.get<any>(this.config.apiUrl+"?path=blog&page="+page,{observe:"response"}).pipe(
    )
  }
  getPost(slug=""){
    return this.httpClient.get<any>(this.config.apiUrl+"?path=blog&page=1&slug="+slug,{observe:"response"}).pipe(
      )
  }
}
