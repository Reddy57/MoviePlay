// import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';
// import { tap, catchError } from 'rxjs/operators';
// import { ToastrService } from 'ngx-toastr';
// import { environment } from 'src/environments/environment';


// @Injectable()
// export class ToasterInterceptor implements HttpInterceptor {
//   constructor(public toasterService: ToastrService) { }
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

//     const path = '/user/purchase';
//     const requestUrl = `${environment.apiUrl}${path}`;
//     const url = req.url;
//     // console.log('Inside Toast Interceptor');
//     // console.log(requestUrl);

//     return next.handle(req).pipe(
//       tap(evt => {
//         if (evt instanceof HttpResponse) {
//           if (evt.body && evt.body.success) {
//             // tslint:disable-next-line:max-line-length
//             this.toasterService.success(evt.body.success.message, evt.body.success.title, { positionClass: 'toast-bottom-center' });
//           }
//         }
//       }),
//       catchError((err: any) => {
//         if (err instanceof HttpErrorResponse) {
//           try {
//             console.log(err);
//             this.toasterService.warning(err.error);
//           } catch (e) {
//             this.toasterService.error('An error occurred', '', { positionClass: 'toast-bottom-center' });
//           }
//           // log error
//         }
//         return of(err);
//       }));
//   }
// }
