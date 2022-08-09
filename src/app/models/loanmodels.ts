export interface ILoandetails {
    id: number;
    loanNo: string ;
    firstName: string;
    lastName: string ;
    amount : number;
    loanterm: number;
    loanType: string;
    property_Address : string;

  }


  export interface IUser {
    Id: number;
    UserName: string;
    Password: string
  }