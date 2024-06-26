import { Component,OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AuthorService } from 'src/app/core/services/author.service';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  post:any;
  slug:string ="";
  authors:any[]=[];
  author:any;
  constructor(private service:PostService,private route: ActivatedRoute,auths:AuthorService,private titleService: Title, private metaService: Meta){
    this.authors =auths.authors;
    this.slug = this.route.snapshot.paramMap.get('slug')??""; 
   
  }
  ngOnInit(): void {
    this.service.getPost(this.slug).subscribe(t=>{
      if(t.body.datas && t.body.datas.length >0){
        this.post =t.body.datas[0]
        this.author= this.getAuthor(this.post.author);
        this.setSEOData(this.post.title +" - DevTestSharing.com",this.post.key_words)
      }

    })
  }
  setSEOData(title: string, description: string) {
    this.titleService.setTitle(title);
    this.metaService.updateTag({ name: 'description', content: description });
    }
  getAuthor(id:any){
    let a = this.authors.find(t=>t.id == id);
    if(a){
      return a;
    }
    return null;
}
}
