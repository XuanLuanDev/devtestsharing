import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from 'src/app/pages/posts/post-list/post-list.component';
import { PostDetailComponent } from 'src/app/pages/posts/post-detail/post-detail.component';
import { PostRoutingModule } from './post-routing.module';
import { ShareModule } from '../share.module';


@NgModule({
  imports: [
    CommonModule,
    PostRoutingModule,
    ShareModule
  ],
  exports: [
    PostListComponent,
    PostDetailComponent
  ],
  declarations: [
    PostListComponent,
    PostDetailComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],  
  providers: [
  ],
})
export class PostModule { }