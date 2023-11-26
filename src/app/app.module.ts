import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PostListComponent } from './pages/posts/post-list/post-list.component';
import { PostDetailComponent } from './pages/posts/post-detail/post-detail.component';
import { AboutComponent } from './pages/about/about.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ScrollToTopComponent } from './shared/scroll-to-top/scroll-to-top.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { Error404Component } from './pages/error404/error404.component';
import { SharedModule } from './modules/shared.module';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { LoaderInterceptor } from './core/interceptors/loader.intercepter';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common'
import { SafeHtmlPipe } from './core/pipes/safe-html.pipe';
import { ConfigService } from './core/services/config.service';
import { map } from 'rxjs';
import { UnicodeFormatPipe } from './core/pipes/unicode-format.pipe';
import { ProductsComponent } from './pages/products/products.component';
import { LoadingComponent } from './shared/loading/loading.component';
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
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostListComponent,
    PostDetailComponent,
    AboutComponent,
    NavbarComponent,
    ScrollToTopComponent,
    FooterComponent,
    PaginationComponent,
    Error404Component,
    SafeHtmlPipe,
    UnicodeFormatPipe,
    ProductsComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule
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
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
