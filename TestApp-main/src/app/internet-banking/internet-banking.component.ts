import { Component, OnInit } from '@angular/core';
import {ServiceModuleService} from '../../app/service-module.service'
@Component({
  selector: 'app-internet-banking',
  templateUrl: './internet-banking.component.html',
  styleUrls: ['./internet-banking.component.css']
})
export class InternetBankingComponent implements OnInit {
   
    public customerId:any = 0;
    public transactionPassword:any = "";
    public accountNumber:any = 0;
    public Repass:any;
    public flag:boolean=false
    public c:number= 0;
    public flag1:boolean=false
    
  constructor(private service:ServiceModuleService) { }

  ngOnInit(): void {
  }
  internetBanking(){

    this.service.getaccount().subscribe(res=>
      {
       r:for(let obj of res)
        {
            if(this.accountNumber==<any>obj.AccountNumber)
            {
              this.flag=true;
              console.log('reached')
              this.customerId=<any>obj.CustomerId
              console.log(this.accountNumber + '  '+ this.customerId)
              break r;
            }
        }
      })
      if(this.flag==false)
      {
        alert('Invalid Account Number')
      }
     
        if(this.Repass==this.transactionPassword)
        {
          this.flag1=true;
        }
        else{
          alert('Passwords not matching')
        }

      console.log(this.flag+' '+this.flag1)
      if(this.flag==true&&this.flag1)
      {
            console.log('reached')
              var postData={
                customerId:this.customerId,
                transactionPassword:this.transactionPassword,
                accountNumber:this.accountNumber
              };
              console.log(postData)
              this.service.PostInternetBanking(postData).subscribe();
              alert('Registered to Internet Banking Successfully!!')
           
        }
      else{
        alert('Registered failed!!')
      }
  }
}


//swagger
/*
"internetBankingId": 0,
    "customerId": 0,
    "transactionPassword": "string",
    "accountNumber": 0,
*/
/*
InternetBankingId: 5000, 
CustomerId: 7003, 
TransactionPassword: 'string',
AccountNumber: 10000, AccountNumberNavigation:
*/