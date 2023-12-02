import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  authors:Author[]=[]
  constructor() { }
}
export class Author{
  id: string ="";
  name: string ="";
  job: string ="";
  description: string ="";
}