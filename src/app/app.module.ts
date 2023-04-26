import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VoleComponent } from './vole/vole.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { RezervationComponent } from './reservation/rezervation.component';
import { AddVOLSComponent } from './add-vols/add-vols.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbaruserComponent } from './navbaruser/navbaruser.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ListComponent,
    VoleComponent,
    RezervationComponent,
    AddVOLSComponent,
    NavbarComponent,
    NavbaruserComponent
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
