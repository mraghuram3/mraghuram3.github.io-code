import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { NgHighlightModule } from 'ngx-text-highlight';
import { NgScrollIndicatorModule } from 'ngx-scroll-indicator';

import { HighlightJsModule } from 'ngx-highlight-js';

import { HomeComponent } from './home/home.component';
import { HighlightComponent } from './highlight/highlight.component';
import { ScrollIndicatorComponent } from './scrollIndicator/scroll-indicator.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HighlightComponent,
    ScrollIndicatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HighlightJsModule,
    NgHighlightModule,
    NgScrollIndicatorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
