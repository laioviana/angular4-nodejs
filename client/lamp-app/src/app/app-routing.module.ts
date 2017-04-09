import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacComponent } from "./fac/fac.component";


export const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
  { path: 'fac' , component: FacComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule],
})
export class AppRoutingModule { }
