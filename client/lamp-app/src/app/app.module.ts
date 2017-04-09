import { CoreModule } from './core/core.module';
import { AppAsideMenuComponent } from './layout/app-aside-menu/app-aside-menu.component';
import { AppMenuComponent } from './layout/app-menu/app-menu.component';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppFooterComponent } from "app/layout/app-footer/app-footer.component";
import { FacModule } from './fac/fac.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppMenuComponent,
    AppAsideMenuComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HomeModule,
    FacModule,
    CoreModule.forRoot({userName: 'Timoteo Jorge'}),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
