import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanformComponent } from './loanform/loanform.component';
import { LoandetailsComponent } from './Loans/loandetails/loandetails.component';
import { LoginComponent } from './User/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'loan', component: LoandetailsComponent },
  { path: 'loanform', component: LoanformComponent },
  



  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
