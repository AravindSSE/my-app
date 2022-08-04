import { Component } from '@angular/core';
import { LoanService } from './Services/loan.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  isShow: boolean = false;
  constructor(
    private loanService: LoanService,
    private router: Router,
  ) {
    debugger
    this.loanService.isHeadshow.subscribe(
   
      (value => this.isShow = value


      ));

  //  numbers.subscribe(value => console.log("Subscriber: " + value));						

   
  }

  public logout(): void{
    this.router.navigate([''] );
  }
}
