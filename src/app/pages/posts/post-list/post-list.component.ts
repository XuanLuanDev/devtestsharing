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
  recordsPerPage:any =6;
  page:any =1;
  authors:any[]=[];
  all_posts:any[]=[];
  totalPage:any =0;
  constructor(private service:PostService,auths:AuthorService,private titleService: Title, private metaService: Meta){
    this.authors =auths.authors;
    this.setSEOData("Chia sẻ kiến thức kinh nghiệm trong ngành IT - DevTestSharing.com","Chia sẻ kiến thức kinh nghiệm lập trình, kiểm thử, database, thi chứng chỉ IT");
    service.getAllPost().subscribe(t=>{
     this.all_posts =t.body.datas
     this.totalRecord =t.body.count;
     if(this.totalRecord%this.recordsPerPage != 0){
      this.totalPage =this.totalRecord/this.recordsPerPage +1;
     }else{
      this.totalPage =this.totalRecord/this.recordsPerPage;
     }
     this.changePage(1);
    })
  }
  setSEOData(title: string, description: string) {
    this.titleService.setTitle(title);
    this.metaService.updateTag({ name: 'description', content: description });
    }
  changePage(p:any){
  this.page = p; 
  let endIndex =(p-1)*this.recordsPerPage + this.recordsPerPage;
  if(endIndex> this.totalRecord){
    endIndex = this.totalRecord;
  }
  this.posts =this.all_posts.slice((p-1)*this.recordsPerPage ,endIndex)
 
  }
  getAuthor(id:any){
    let a = this.authors.find(t=>t.id == id);
    if(a){
      return a;
    }
    return null;
}
}
