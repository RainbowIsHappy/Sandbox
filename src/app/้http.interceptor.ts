import { Injectable } from "@angular/core"
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Router } from "@angular/router";
import { Observable, catchError, of } from "rxjs";

@Injectable()
export class httpIntercept implements HttpInterceptor {
  constructor(private router: Router){ }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable < any > {
    //intercept request
    const cloned = req.clone({
      url: 'https://api-staging-dip.botnoi.ai/dashboard/review_score?start_date=2023-05-24&end_date=2023-05-24',
    });
    const cloned2 = req.clone({
      url: 'https://jsonplaceholder.typicode.com/posts',
    });
    //const token = localStorage.getItem('token')
    //intercept response
    return next.handle(cloned).pipe(
      catchError((error) => {
        if (error.status === 401) {
          console.log(error.status)
          return of(console.log("error page 401."));
          //return throwError(() => error,);
        } else {
          console.log(error.status)
          return of(console.log('error page'));
        }
      })
    );
  }
}
