import { Component } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
products:any[]=[];
totalRecord:any =0;
recordsPerPage:any =12;
page:any =1;
constructor(private service:ProductService){
  service.getAllPost().subscribe(t=>{
   this.products =t.body.datas
  this.totalRecord =t.body.count;
  })
}
changePage($event:any){
  this.page = $event; 
  this.products =[];
  this.service.getAllPost(this.page).subscribe(t=>{
    this.products =t.body.datas
    this.totalRecord =t.body.count;
   })
  }
}
