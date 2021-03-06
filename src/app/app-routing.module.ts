import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';

const routes: Routes = [
  { path: '', redirectTo: '/acceuil', pathMatch: 'full' },
  { path: 'acceuil', component: AcceuilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
