import { Component } from '@angular/core';
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
  constructor(private service:PostService){
    service.getAllPost().subscribe(t=>{
     this.posts =t.body.datas
     this.totalRecord =t.body.count;
    })
  }
  changePage($event:any){
  this.page = $event; 
  this.posts =[];
  this.service.getAllPost(this.page).subscribe(t=>{
    this.posts =t.body.datas
    this.totalRecord =t.body.count;
   })
  }
}
