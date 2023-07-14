import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatTableComponent } from './mat-table/mat-table.component';
import { WebFlexComponent } from './web-flex/web-flex.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'table', component: MatTableComponent },
  { path: 'flex', component: WebFlexComponent },
  { path: '', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
