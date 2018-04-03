import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HighlightComponent } from './highlight/highlight.component';
import { ScrollIndicatorComponent } from './scrollIndicator/scroll-indicator.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'ngx-text-highlight', component: HighlightComponent },
    { path: 'ngx-scroll-indicator', component: ScrollIndicatorComponent },
    { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
