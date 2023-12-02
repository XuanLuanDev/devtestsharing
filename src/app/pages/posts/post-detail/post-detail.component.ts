import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorService } from 'src/app/core/services/author.service';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent {
  post:any;
  slug:string ="";
  authors:any[]=[];
  author:any;
  constructor(private service:PostService,private route: ActivatedRoute,auths:AuthorService){
    this.authors =auths.authors;
    this.slug = this.route.snapshot.paramMap.get('slug')??""; 
    service.getPost(this.slug).subscribe(t=>{
      if(t.body.datas && t.body.datas.length >0)
      this.post =t.body.datas[0]
      this.author= this.getAuthor(this.post.author);
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
