import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HighlightComponent } from './highlight/highlight.component';
import { ScrollIndicatorComponent } from './scrollIndicator/scroll-indicator.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';
import { DatePickerComponent } from './date-picker/date-picker.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'ngx-text-highlight', component: HighlightComponent },
    { path: 'ngx-scroll-indicator', component: ScrollIndicatorComponent },
    { path: 'ngx-virtual-scroll-list', component: VirtualScrollComponent },
    { path: 'ngx-date-picker-component', component: DatePickerComponent },
    { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
