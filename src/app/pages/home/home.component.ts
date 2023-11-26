import { Component } from '@angular/core';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
posts:any[] =[];
constructor(private service:PostService){
  service.getAllPost().subscribe(t=>{
   this.posts =t.body.datas
  })
}
}
