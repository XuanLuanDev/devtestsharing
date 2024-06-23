import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { AuthorService } from 'src/app/core/services/author.service';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
  posts:any[] =[];
  totalRecord:any =0;
  recordsPerPage:any =12;
  page:any =1;
  authors:any[]=[];
  constructor(private service:PostService,auths:AuthorService,private titleService: Title, private metaService: Meta){
    this.authors =auths.authors;
    this.setSEOData("Chia sẻ kiến thức kinh nghiệm trong ngành IT - DevTestSharing.com","Chia sẻ kiến thức kinh nghiệm lập trình, kiểm thử, database, thi chứng chỉ IT");
    service.getAllPost().subscribe(t=>{
     this.posts =t.body.datas
     this.totalRecord =t.body.count;
    })
  }
  setSEOData(title: string, description: string) {
    this.titleService.setTitle(title);
    this.metaService.updateTag({ name: 'description', content: description });
    }
  changePage($event:any){
  this.page = $event; 
  this.posts =[];
  this.service.getAllPost(this.page).subscribe(t=>{
    this.posts =t.body.datas
    this.totalRecord =t.body.count;
   })
  }
  getAuthor(id:any){
    let a = this.authors.find(t=>t.id == id);
    if(a){
      return a;
    }
    return null;
}
}
