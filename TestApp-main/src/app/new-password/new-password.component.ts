import { Component, OnInit } from '@angular/core';
import {ServiceModuleService} from '../../app/service-module.service'
@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent implements OnInit {

  public customerId:number=0;
  public transactionPassword:string=''
  public RtransactionPassword:string=''
  public accountNumber:number=0;
  public internetBankingId:number=0;
  public flag:boolean=false;
  public flag1:boolean=false;

  constructor(private service:ServiceModuleService) { }

  ngOnInit(): void {
  }

  transaction(){
      this.service.getInternetBanking().subscribe(data=>{
        console.log(data)
        for(let obj of data)
        {
          if(this.customerId==<any>obj.CustomerId)
          {
              this.accountNumber=<any>obj.AccountNumber;
              this.internetBankingId=<any>obj.InternetBankingId,
              this.flag=true;
              var putData={
                internetBankingId:this.internetBankingId,
                customerId:this.customerId,
                transactionPassword:this.transactionPassword,
                accountNumber:this.accountNumber
              }
              this.service.PutInternetBanking(this.internetBankingId,putData).subscribe();
          }
        }
      })
  }
}
/*
swagger
customerId": 0,
          "transactionPassword": "string",
          "accountNumber": 0
*/
/*
InternetBankingId: 5001, CustomerId: 7004, TransactionPassword: 'string', AccountNumber: 10001, AccountNumberNavigation
*/