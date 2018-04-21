import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Page1Component,
    Page2Component,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomePageComponent},
      {path: 'page1', component: Page1Component},
      {path: 'page2', component: Page2Component}

    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
