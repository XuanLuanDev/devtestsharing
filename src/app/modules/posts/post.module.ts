import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from 'src/app/pages/posts/post-list/post-list.component';
import { PostDetailComponent } from 'src/app/pages/posts/post-detail/post-detail.component';
import { SharedModule } from '../shared.module';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProjectRoutingModule
  ],
  exports: [
    ProjectComponent
  ],
  declarations: [
    ProjectComponent
  ],
  providers: [
  ],
})
export class ProjectModule { }