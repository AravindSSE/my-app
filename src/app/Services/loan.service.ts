import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ILoandetails } from 'src/app/models/loanmodels';
import { HttpClient } from "@angular/common/http"; 



@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private isHeadShowSubject: BehaviorSubject<boolean>;
  public isHeadshow: Observable<boolean>;
  constructor(private http: HttpClient) {
    this.isHeadShowSubject = new BehaviorSubject<boolean>(false);
    this.isHeadshow = this.isHeadShowSubject.asObservable();
   }


 public login( username: string, password: string): Boolean {
 
   if ( username === 'admin' && password === "admin123"){
          return true
   }
    else {
      return false;
    }
}

public search(): Array<ILoandetails>{

 // return this.http.get('http://localhost:1680/api/employee/Getdetaisl')

  return this.loaddata()
}

public getdetails() {    
  debugger;    
  return this.http.get('http://localhost:5000/Loan/GetAll')    
} 

public isHeadShow(isShow: boolean):void{
 this.isHeadShowSubject.next(isShow);
}

public getdetailsbyid(id: number):  ILoandetails{
let loandetails: any;

debugger
let loandetailsarray = this.loaddata();
loandetails =loandetailsarray.find( element => element.id === id)

return loandetails 
}

public loaddata(): Array<ILoandetails> {

  let loandetails = new Array<ILoandetails>();
  loandetails = [ { id: 1, LoanNo : "L001",FirstName: "Aravind",LastName: "Kumar", Amount: "1000", Loanterm: 3},
  { id: 2, LoanNo : "L002",FirstName: "Raj",LastName: "Kumar",Amount: "2000",  Loanterm: 4},
  { id: 3, LoanNo : "L003",FirstName: "Ram",LastName: "Kumar", Amount: "3000", Loanterm: 5}
]


  return loandetails;

}  



}
