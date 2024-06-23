import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ScrollToTopComponent } from './shared/scroll-to-top/scroll-to-top.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { LoaderInterceptor } from './core/interceptors/loader.intercepter';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common'
import { ConfigService } from './core/services/config.service';
import { map } from 'rxjs';
import { ProductsComponent } from './pages/products/products.component';
import { LoadingComponent } from './shared/loading/loading.component';
import {  AuthorService } from './core/services/author.service';
import { CacheInterceptor } from './core/interceptors/cache.intercepter';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PostModule } from './modules/posts/post.module';
import { ShareModule } from './modules/share.module';
import { ArchiveComponent } from './pages/archive/archive.component';
function initialize(http: HttpClient, config: ConfigService): (() => Promise<boolean>) {
  return (): Promise<boolean> => {
    return new Promise<boolean>((resolve: (a: boolean) => void): void => {
       http.get('./assets/config.json')
         .pipe(
           map((x: any) => {
             config.apiUrl = x.apiUrl;
             resolve(true);
           })
         ).subscribe();
    });
  };
}
function getAuthor(http: HttpClient, config: AuthorService): (() => Promise<boolean>) {
  return (): Promise<boolean> => {
    return new Promise<boolean>((resolve: (a: boolean) => void): void => {
       http.get('./assets/author.json')
         .pipe(
           map((x: any) => {
             config.authors =[];
             for(let i=0;i<x.length;i++){
              config.authors.push({
                id:x[i].id,
                name:x[i].name,
                job:x[i].job,
                description:x[i].description
              });
             }
             resolve(true);
           })
         ).subscribe();
    });
  };
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   // PostListComponent,
   // PostDetailComponent,
    AboutComponent,
    NavbarComponent,
    ScrollToTopComponent,
    FooterComponent,
    PaginationComponent,
   //SafeHtmlPipe,
   // UnicodeFormatPipe,
    ProductsComponent,
    LoadingComponent,
    NotFoundComponent,
    ArchiveComponent
  ],
  imports: [
    BrowserModule,
    ShareModule,
    AppRoutingModule,
    PostModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [
   DatePipe,
   {
    provide: APP_INITIALIZER,
    useFactory: initialize,
    deps: [
        HttpClient,
        ConfigService
      ],
    multi: true
  },
  {
    provide: APP_INITIALIZER,
    useFactory: getAuthor,
    deps: [
        HttpClient,
        AuthorService
      ],
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true
  },
  { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true }
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],  
  bootstrap: [AppComponent]
})
export class AppModule { }
