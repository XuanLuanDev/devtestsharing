import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostListComponent } from './pages/posts/post-list/post-list.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { PostDetailComponent } from './pages/posts/post-detail/post-detail.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'bai-viet',component:PostListComponent},
  {path:'bai-viet/:slug',component:PostDetailComponent},
  {path:'gioi-thieu',component:AboutComponent},
  {path:'san-pham-da-lam',component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
