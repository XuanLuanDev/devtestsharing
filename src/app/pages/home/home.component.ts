import { Component } from '@angular/core';
import { AuthorService } from 'src/app/core/services/author.service';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
posts:any[] =[];
authors:any[]=[];
constructor(private service:PostService,auths:AuthorService){
  this.authors =auths.authors;
  service.getAllPost().subscribe(t=>{
   this.posts =t.body.datas
  })
}
getAuthor(id:any){debugger
    let a = this.authors.find(t=>t.id == id);
    if(a){
      return a;
    }
    return null;
}
}
