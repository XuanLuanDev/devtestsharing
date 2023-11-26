import { Component,OnInit } from '@angular/core';
import { AboutService } from 'src/app/core/services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
content:any ;
constructor(private service:AboutService){

}
  ngOnInit(): void {
    this.service.getAbout().subscribe((t:any)=>{
      if(t.body.datas && t.body.datas.length >0)
      this.content =t.body.datas[0]
    })
  }
}
