import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ILoandetails, IUser } from 'src/app/models/loanmodels';
import { HttpClient } from "@angular/common/http"; 



@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private isHeadShowSubject: BehaviorSubject<boolean>;
  public isHeadshow: Observable<boolean>;

   private UserNameDisplaySub: BehaviorSubject<String>;
   public  UserNameDisplay: Observable<String>;


  constructor(private http: HttpClient) {
    this.isHeadShowSubject = new BehaviorSubject<boolean>(false);
    this.isHeadshow = this.isHeadShowSubject.asObservable();

    this.UserNameDisplaySub = new BehaviorSubject<String>(" ");
    this.UserNameDisplay = this.UserNameDisplaySub.asObservable();
   }


 public login( username: string, password: string): Boolean {
 
   if ( username === 'admin' && password === "admin123"){
          return true
   }
    else {
      return false;
    }
}

public login_1(username: string, password: string) {  
  debugger  
  let user: IUser= { Id: 1, UserName: username, Password: password}
  return this.http.post('https://localhost:5001/WeatherForecast/Login', user)  
} 

public isHeadShow(isShow: boolean):void{
  this.isHeadShowSubject.next(isShow);
 }

 public displayUserName(username: string):void{
  this.UserNameDisplaySub.next(username);
 }

public getdetails() {    
  return this.http.get('https://localhost:5001/WeatherForecast/GetAll')  
}

public getdetailsbyId(id: number) {    
  return this.http.get('https://localhost:5001/WeatherForecast/'+id)  
} 

public addNewLoan(loan: ILoandetails) {    
  return this.http.post('https://localhost:5001/WeatherForecast/',loan)  
} 

public updateLoan(loan: ILoandetails) {    
  return this.http.put('https://localhost:5001/WeatherForecast/',loan)  
} 

public search(loan: ILoandetails) {  
  debugger  
 // let user: IUser= { Id: 1, UserName: "ara", Password: "pass"}
  return this.http.post('https://localhost:5001/WeatherForecast/Search', loan)  
} 



  



}
