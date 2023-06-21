import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { NavbarrComponent } from './navbarr/navbarr.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarrComponent,
    RouterModule.forRoot([
      { path: 'angularWaldo', component: HomepageComponent },
      { path: 'searchImager', component: SearchComponent },
      { path: '**', component: HomepageComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
