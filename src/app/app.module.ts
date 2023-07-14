import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { httpIntercept } from './้http.interceptor';
import { MatTableComponent } from './mat-table/mat-table.component';
import { WebFlexComponent } from './web-flex/web-flex.component';
import { WebApiComponent } from './web-api/web-api.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MatTableComponent,
    WebFlexComponent,
    WebApiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [
    // open comment to try interceptor
    // { provide: HTTP_INTERCEPTORS, useClass: httpIntercept, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
