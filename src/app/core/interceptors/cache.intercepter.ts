import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpCacheService } from '../services/cache.service';
import { TimerService } from '../services/timer.service';


@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  constructor(
  private cacheService: HttpCacheService,
  private timerService: TimerService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<any> {
    
    this.timerService.startTimer();
    let remainingTimeInMilliseconds = this.timerService.getRemainingTime();
    
    if (remainingTimeInMilliseconds <= 0) {
      
      this.timerService.resetTimer();
      this.cacheService.invalidateCache();
    } 


    //check if the outgoing calls are GET and MRDH APIs
    if (req.method === 'GET' ) { 
      // attempt to retrieve a cached response
      const cachedResponse:
        | HttpResponse<any>
        | undefined = this.cacheService.get(req.url);

      // return cached response
      if (cachedResponse) {
        return of(cachedResponse);
      }

      // send request to server and add response to cache
      return next.handle(req).pipe(
        tap((event) => {
          if (event instanceof HttpResponse) {
            this.cacheService.put(req.url, event);
          }
        })
      );
    }
    else {
        // pass along non-cacheable requests 
        return next.handle(req);
    }
  }
}
