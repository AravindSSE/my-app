import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './User/login/login.component';
import { LoandetailsComponent } from './Loans/loandetails/loandetails.component';
import { LoanformComponent } from './loanform/loanform.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    LoandetailsComponent,
    LoanformComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
