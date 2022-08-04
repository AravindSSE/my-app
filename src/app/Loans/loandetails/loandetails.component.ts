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
  searchLoan: ILoandetails ={ id: 0,LoanNo:"", FirstName: "",LastName: "",Amount:"",  Loanterm: 0};

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
    debugger
   // console.log(this.searchLoan)
    this.loans = this.loanService.search()
   //this.loanService.search_1()
   this.test()
  }

  public test(){
    this.loanService.getdetails().subscribe((data: any) => {    
    //  this.name = data;  
    debugger  
      console.log(data);    
     // this.shareDataService.Employeename = this.name;    
    }) 
  }

  public edit(loan: ILoandetails): void{
    this.router.navigate(['/loanform', {id: loan.id}] );
  }

  public addNew():void {
    this.router.navigate(['/loanform', {id: 0}] );
  }

}
