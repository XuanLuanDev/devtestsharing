import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private httpClient:HttpClient,private config:ConfigService) { }
  getAbout():any{
    return this.httpClient.get<any>(this.config.apiUrl+"?path=about&page=1",{observe:"response"}).pipe(
    )
  }
}
