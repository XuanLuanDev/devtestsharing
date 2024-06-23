import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ArchiveComponent } from './pages/archive/archive.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  { path: 'bai-viet', loadChildren: () => import('./modules/posts/post.module').then(m => m.PostModule)},
  {path:'gioi-thieu',component:AboutComponent},
  {path:'luu-tru',component:ArchiveComponent},
  {path:'san-pham-da-lam',component:ProductsComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
