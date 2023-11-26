import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from 'src/app/pages/posts/post-list/post-list.component';
import { PostDetailComponent } from 'src/app/pages/posts/post-detail/post-detail.component';
const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: ':slug', component: PostDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }