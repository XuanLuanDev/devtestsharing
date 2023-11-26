import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss']
})
export class ScrollToTopComponent {
  scrollToTop() {
    window.scrollTo (0,0);
}
hide=true;
@HostListener('window:scroll', ['$event']) 
onScroll(event:any) {
  let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
   this.hide =currentScroll<600;
}
}
