import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { NgHighlightModule } from 'ngx-text-highlight';
import { NgScrollIndicatorModule } from 'ngx-scroll-indicator';
import { NgxVirtualScrollModule } from 'ngx-virtual-scroll-list';
import { NgxDatePickerModule } from 'ngx-date-picker-component';
import { NgxResizeModule } from 'ngx-resizer';
import { NgxReoderModule } from 'ngx-reorder';
import { HighlightJsModule } from 'ngx-highlight-js';

import { HomeComponent } from './home/home.component';
import { HighlightComponent } from './highlight/highlight.component';
import { ScrollIndicatorComponent } from './scrollIndicator/scroll-indicator.component';

import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { ResizeComponent } from './resize/resize.component';
import { ReorderComponent } from './reorder/reorder.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HighlightComponent,
    ScrollIndicatorComponent,
    VirtualScrollComponent,
    DatePickerComponent,
    ResizeComponent,
    ReorderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HighlightJsModule,
    NgHighlightModule,
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
    NgScrollIndicatorModule.forRoot(),
    NgxResizeModule.forRoot(),
    NgxReoderModule,
    NgxVirtualScrollModule,
    NgxDatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
