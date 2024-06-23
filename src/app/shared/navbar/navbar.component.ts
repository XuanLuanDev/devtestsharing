import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  mode:number =1;
  constructor(private router: Router) {
    router.events.subscribe(t=>
      {
        if(this.router.url ==""){
            this.mode =1;
        }
        else if(this.router.url =="/gioi-thieu"){
          this.mode =2;
        }
        else if(this.router.url.indexOf("/bai-viet")>=0){
          this.mode =3;
        }
        else if(this.router.url.indexOf("/luu-tru")>=0){
          this.mode =4;
        }
        else{
          this.mode =1;
        }
      }
    );
  }
  goToHome(){
    this.router.navigate(['/']);
  }
}
