import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


import { ResolverproductComponent } from './resolverproduct/resolverproduct.component';









import { EdittaskComponent } from './taskdisplay/edittask/edittask.component';
import { UserdisplayComponent } from './userdisplay/userdisplay.component';
import { SignupreactiveComponent } from './userdisplay/signupreactive/signupreactive.component';
import { EditreactiveComponent } from './userdisplay/editreactive/editreactive.component';
import { MenuComponent } from './menu/menu.component';
import { TaskdisplayComponent } from './taskdisplay/taskdisplay.component';

import { EditproductComponent } from './productdisplay/editproduct/editproduct.component';


@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
SignupreactiveComponent,
ResolverproductComponent,

EdittaskComponent,
UserdisplayComponent,
SignupreactiveComponent,
MenuComponent,
TaskdisplayComponent,


EditreactiveComponent,

EditproductComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    ReactiveFormsModule,


    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
