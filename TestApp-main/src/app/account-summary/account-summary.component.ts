import { Component, OnInit } from '@angular/core';
import {ServiceModuleService} from '../../app/service-module.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.css']
})
export class AccountSummaryComponent implements OnInit {
  public Account_Number:any;
  public Balance:any;	
  public Customer_Id:any;	
  public title:string="";
  public firstName:string="";
  public middleName:string="";
  public lastName:string="";
  public fatherName:string="";
  public mobileNumber:string="";
  public emailId:string="";
  public addressLine1:string="";
  public addressLine2:string="";
  public landmark:string="";
  public state:string="";
  public city:string="";
  public pincode:string="";
  public aadharNumber:string="";
  public phoneNumber:string="";

  public Address:any;

  constructor(private service: ServiceModuleService,private router: Router) {
    
   }
  ngOnInit(): void {
    this.getAccountDetails();
    this.getCustomerDetails();
  }
  public deleteCookie(){
    sessionStorage.clear();
    this.router.navigateByUrl('/login');    
  }
  
  //{AccountNumber: 10000, Balance: 10000, AccountType: 'string', CustomerId: 7003, Customer: null, …
   getAccountDetails()
  {
    console.log('reached account')
    this.service.getaccount().subscribe(res=>{
      console.log(res);
          for(let obj1 of res)
          {
            if(sessionStorage.getItem('UserAccountNumber')==<any>obj1.AccountNumber)
              {
                this.Account_Number=sessionStorage.getItem('UserAccountNumber');
                this.Customer_Id=<any>obj1.CustomerId;
                this.Balance=<any>obj1.Balance;
              }
          }
          
   })
  }
  getCustomerDetails()
  {
    console.log('reached customer')
    this.service.GetCreateNewAccount().subscribe(data=>{
          console.log(data)
          for(let obj of data)
          {
              if(this.Customer_Id==<any>obj.CustomerId)
              { 
                this.firstName=<any>obj.FirstName;
                this.middleName=<any>obj.MiddleName;
                this.lastName=<any>obj.LastName;
                this.fatherName=<any>obj.FatherName;
                this.phoneNumber=<any>obj.MobileNumber;
                this.aadharNumber=<any>obj.AadharNumber;
                this.emailId=<any>obj.EmailId;
                this.addressLine1=<any>obj.AddressLine1;
                this.addressLine2=<any>obj.AddressLine2;
                this.state=<any>obj.State;
                this.city=<any>obj.City;
                this.pincode=<any>obj.Pincode;
                
              }
          }
        
   })
  }
}
