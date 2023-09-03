import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DefaultComponent } from './default/default.component';
import { OrdersEditComponent } from './orders-edit/orders-edit.component';
import { OrdersAddComponent } from './orders-add/orders-add.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    PageNotFoundComponent,
    DefaultComponent,
    OrdersEditComponent,
    OrdersAddComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
