import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { UserGuardComponent } from './user-guard/user-guard.component';

=======
import { ReactiveFormsModule } from '@angular/forms';
import { EdittaskComponent } from './taskdisplay/edittask/edittask.component';
=======
<<<<<<< HEAD
>>>>>>> 79cb1c18ca47d1146f0afef73504ef40953572e5
import { UserdisplayComponent } from './userdisplay/userdisplay.component';
import { SignupreactiveComponent } from './userdisplay/signupreactive/signupreactive.component';

import { TaskdisplayComponent } from './taskdisplay/taskdisplay.component';
import { MenuComponent } from './menu/menu.component';
=======
import { EdittaskComponent } from './taskdisplay/edittask/edittask.component';
import { UserdisplayComponent } from './userdisplay/userdisplay.component';
import { SignupreactiveComponent } from './userdisplay/signupreactive/signupreactive.component';
import { EditreactiveComponent } from './userdisplay/editreactive/editreactive.component';
import { MenuComponent } from './menu/menu.component';
import { TaskdisplayComponent } from './taskdisplay/taskdisplay.component';
>>>>>>> 3ad3464a6b17d693383bfa18b40fbb2da03d2bbc

@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
<<<<<<< HEAD
UserGuardComponent,

=======
<<<<<<< HEAD
    LoginComponent,
EdittaskComponent
=======
<<<<<<< HEAD
>>>>>>> 79cb1c18ca47d1146f0afef73504ef40953572e5
    UserdisplayComponent,
SignupreactiveComponent,
MenuComponent,

    TaskdisplayComponent
=======
EdittaskComponent,
UserdisplayComponent,
SignupreactiveComponent,
EditreactiveComponent,
TaskdisplayComponent

>>>>>>> 3ad3464a6b17d693383bfa18b40fbb2da03d2bbc
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD

    ReactiveFormsModule
=======
    ReactiveFormsModule,
    FormsModule,ReactiveFormsModule
>>>>>>> 3ad3464a6b17d693383bfa18b40fbb2da03d2bbc
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
