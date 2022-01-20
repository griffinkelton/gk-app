import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { sbButtonComponent } from './components/button/button.component';
import { NavComponent } from './components/nav/nav.component';
import { sbHeaderComponent } from './components/header/header.component';
import { sbLineComponent } from './components/line/line.component';
import { sbFunnelBar } from './components/funnel-bar/funnel-bar.component';
import { sbFunnelDescender } from './components/funnel-descender/funnel-descender.component';

@NgModule({
  declarations: [
    AppComponent,
    sbButtonComponent,
    NavComponent,
    sbHeaderComponent,
    sbLineComponent,
    sbFunnelBar,
    sbFunnelDescender
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
