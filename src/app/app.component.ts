import { Component } from '@angular/core';
import { LoanService } from './Services/loan.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Loan Application';
  isShow: boolean = false;
  userName: String = "";
  constructor(
    private loanService: LoanService,
    private router: Router,
  ) {
    debugger
    this.loanService.isHeadshow.subscribe(
      (
        value => this.isShow = value
      ));

      this.loanService.UserNameDisplay.subscribe(
        (
          value => this.userName = value
        ));

 

   
  }

  public logout(): void{
    this.router.navigate([''] );
    localStorage.clear();
  }
}
