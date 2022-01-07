import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { sbButtonComponent } from './components/button.component';
import { NavComponent } from './components/nav.component';
import { sbHeaderComponent } from './components/header.component';
import { sbLineComponent } from './components/line.component';

@NgModule({
  declarations: [
    AppComponent,
    sbButtonComponent,
    NavComponent,
    sbHeaderComponent,
    sbLineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
