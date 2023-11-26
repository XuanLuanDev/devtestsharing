import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent {
  post:any;
  slug:string ="";
  constructor(private service:PostService,private route: ActivatedRoute,){
    this.slug = this.route.snapshot.paramMap.get('slug')??""; 
    service.getPost(this.slug).subscribe(t=>{
      if(t.body.datas && t.body.datas.length >0)
      this.post =t.body.datas[0]
    })
  }
}
