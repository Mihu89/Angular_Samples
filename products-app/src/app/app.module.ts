import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsModule } from './products/products.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path:'home', component: HomeComponent},
      {path:'', redirectTo: 'home', pathMatch:'full'},
      // {path: '**', redirectTo: 'home', pathMatch:'full'}
    ]),
     ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
