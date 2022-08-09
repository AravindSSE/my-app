import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ILoandetails } from '../models/loanmodels';

import { Router, ActivatedRoute } from '@angular/router';
import { LoanService } from 'src/app/Services/loan.service';

@Component({
  selector: 'app-loanform',
  templateUrl: './loanform.component.html',
  styleUrls: ['./loanform.component.css']
})
export class LoanformComponent implements OnInit {
  form: FormGroup;
  loan: ILoandetails ={ id: 0,loanNo:"", firstName: "",lastName: "",amount:0,  loanterm: 0,  loanType: "", property_Address: ""};
  id: number = 0;
  pageName: string = ""
  buttonName: string = ""

  constructor( private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loanService: LoanService) {

      this.route.params.subscribe(params => {
      
        this.id = params['id'];
      });
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      Amount: ['', Validators.required],
      Loanterm: ['', Validators.required],
      loantype: ['', Validators.required],
      address: ['', Validators.required],
              
  });

   }

  ngOnInit(): void {
    debugger
    if(+this.id >0){
      this.pageName = "Loan Update"
      this.buttonName = "Update"
      this.getdetailsbyid(+this.id);
    } else {
      this.pageName = "Loan Register"
      this.buttonName = "Create"
    }

  }

  public getdetailsbyid(id: number):  void{
  // this.loan = this.loanService.getdetailsbyid(id);

   let loandetails: any;
  this.loanService.getdetailsbyId(id).subscribe((data: any) => {    
    //  this.name = data;  
    this.loan=  data
    debugger  
      console.log(data);    
     // this.shareDataService.Employeename = this.name;    
    }) 

   debugger
  }

   public cancle(): void{
    this.router.navigate(['/loan'] );
   }

   public Register(): void{
     debugger
    if (this.form.invalid) { 
      Object.keys( this.form.controls).forEach(key => {
        this.form.controls[key].markAsDirty();
      });
      return;
    }

    if(this.buttonName = "Create"){
      this.loanService.addNewLoan(this.loan).subscribe((data: any) => {  
        debugger;  
        this.router.navigate(['/loan'] );
        })
    } else {
      this.loanService.updateLoan(this.loan).subscribe((data: any) => {  
        debugger;  
        this.router.navigate(['/loan'] );
        })
    }
    


  }

}
