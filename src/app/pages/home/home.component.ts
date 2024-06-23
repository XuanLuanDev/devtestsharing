import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { AuthorService } from 'src/app/core/services/author.service';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
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
   this.all_posts =t.body.datas;
   this.totalRecord =t.body.count;
   let endIndex =6;
  if(endIndex> this.totalRecord){
    endIndex = this.totalRecord;
  }
  this.posts =this.all_posts.slice(0 ,endIndex)
  })
}
getAuthor(id:any){
    let a = this.authors.find(t=>t.id == id);
    if(a){
      return a;
    }
    return null;
}
setSEOData(title: string, description: string) {
  this.titleService.setTitle(title);
  this.metaService.updateTag({ name: 'description', content: description });
  }
}
