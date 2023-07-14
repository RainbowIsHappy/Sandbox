import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { httpIntercept } from './้http.interceptor';
import { MatTableComponent } from './mat-table/mat-table.component';
import { WebFlexComponent } from './web-flex/web-flex.component';
@NgModule({
  declarations: [
    AppComponent,
    MatTableComponent,
    WebFlexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    // open comment to try interceptor
    // { provide: HTTP_INTERCEPTORS, useClass: httpIntercept, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
