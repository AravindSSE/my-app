import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ILoandetails } from 'src/app/models/loanmodels';
import { LoanService } from 'src/app/Services/loan.service';

@Component({
  selector: 'app-loandetails',
  templateUrl: './loandetails.component.html',
  styleUrls: ['./loandetails.component.css']
})
export class LoandetailsComponent implements OnInit {
  loans: Array<ILoandetails>=[];
  searchLoan: ILoandetails ={ id: 0,loanNo:"", firstName: "",lastName: "",amount:0,  loanterm: 0, loanType: "", property_Address: ""};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loanService: LoanService
  ) {

   this.loanService.isHeadShow(true);
  
   }

  ngOnInit(): void {
  }

  public search(): void{
 //  this.loanService.getdetails().subscribe((data: any) => {    
 //   this.loans =  data
 //   }); 

    this.loanService.search(this.searchLoan).subscribe((data: any) => { 
      this.loans =  data
      }); 
  }



  public edit(loan: ILoandetails): void{
    this.router.navigate(['/loanform', {id: loan.id}] );
  }

  public addNew():void {
    this.router.navigate(['/loanform', {id: 0}] );
  }

}
