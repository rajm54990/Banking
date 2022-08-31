import { Component, OnInit } from '@angular/core';
import {ServiceModuleService} from '../../app/service-module.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-account-statement',
  templateUrl: './account-statement.component.html',
  styleUrls: ['./account-statement.component.css']
})
export class AccountStatementComponent implements OnInit {

  constructor(private service:ServiceModuleService,private router: Router) { }
   ngOnInit(): void {
     this.accountBalance()
  }
   public acc_bal:any;
   public arr:any = [];
   public arr1:any = [];
   public TransactionList:any = [];
   public disaplyList:any = {};
   public ID:number=0;
   public fromAcc:number=0;
   public toAcc:number=0;
   public amount:number=0;

  public ID1:number=0;
  public fromAcc1:number=0;
  public toAcc1:number=0;
  public amount1:number=0;
   public CancelTransactions(){
      alert("Are you sure want to cancel the transaction summary");
   }
   public  i:number=0;
  
   public deleteCookie(){
     sessionStorage.clear();
     this.router.navigateByUrl('/login');   
   }

   accountBalance(){
     this.service.getaccount().subscribe(data=>
      {
        console.log(data)
        for(let obj of data)
        {
          if(<any>obj.AccountNumber==sessionStorage.getItem('UserAccountNumber'))
          {
              this.acc_bal=<any>obj.Balance;
              console.log(this.acc_bal)
          }
        }
      })
   }

public submitTransactions(){ 
     
    this.service.GetTransactionDetails().subscribe(data=>{
          this.TransactionList = data;
          console.log(data)
          for(let obj of data){
          
            if(sessionStorage.getItem('UserAccountNumber')==<any>obj.FromAccountNo || sessionStorage.getItem('UserAccountNumber')==<any>obj.ToAccountNo)
            {
              this.disaplyList={
                ID : <any>obj.TransactionId,
                fromAcc:<any>obj.FromAccountNo,
                toAcc:<any>obj.ToAccountNo,
                amount:<any>obj.Amount
              }
              this.arr[this.i]=this.disaplyList
              this.i++
             
            }
          }
   })
  }
}
