

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { LoanService } from 'src/app/Services/loan.service';

//import { AccountService, AlertService } from '@app/_services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    form: FormGroup;
    loading = false;
    submitted = false;
    showerror = false;
    errormsg = "";  //  returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private loanService: LoanService
    ) {

     
      this.form = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
                
    });

   this.loanService.isHeadShow(false);

}

    ngOnInit() {
       


    }

     get f() { return this.form.controls; }

    // convenience getter for easy access to form fields

    onSubmit() {
       this.errormsg = "";
       this.showerror = false;
      if (this.form.invalid) { 
        Object.keys( this.form.controls).forEach(key => {
          this.form.controls[key].markAsDirty();
        });
        return;
      }
    


      this.loanService.login_1(this.form.controls['username'].value, this.form.controls['password'].value).subscribe((data: any) => { 
       debugger
          if(data === true){
            localStorage.setItem("user",this.form.controls['username'].value);
            this.router.navigate(['/loan']);
          } else {
            this.errormsg = "Invalid Username and Password";
            this.showerror = true;
          }
        }); 





     
    }
}
