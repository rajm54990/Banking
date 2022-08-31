import { Component, OnInit } from '@angular/core';
import {ServiceModuleService} from '../../app/service-module.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-imps',
  templateUrl: './imps.component.html',
  styleUrls: ['./imps.component.css']
})
export class ImpsComponent implements OnInit {

 
  constructor(private service:ServiceModuleService,private router: Router) { }
  ngOnInit(): void {
  }
 
  public deleteCookie(){
    sessionStorage.clear();
    this.router.navigateByUrl('/login');   
  } 
  
  public fromAccountNo:number=0;
  public toAccountNo:number=0;
  public amount:number=0;
  public transactionPassword:string='';
  public mode:string='IMPS';
  public date:string='';
  public time:string='';
  public dateTime = new Date();

  public from_bal:number=0;
  public to_bal:number=0;
  public from_id:any;
  public to_id:any;

  flag:boolean=false;
  flag1:boolean=false;
  flag2:boolean=false;
  
//AccountNumber: 10000, Balance: 10000, AccountType: 'string', CustomerId: 7003,
  public Time:string = this.dateTime.toString().substring(16,24);
  public submitimps(){
    
    this.service.getaccount().subscribe(data=>
      {
        console.log("Account data")
        console.log(data)
        for(let obj of data)
        {
          if(this.fromAccountNo==<any>obj.AccountNumber)
          {
            this.from_id=<any>obj.CustomerId
            console.log(this.from_id+' '+<any>obj.CustomerId)
            this.from_bal=<any>obj.Balance
            console.log('erached1')
            this.flag=true;
          }
        }
        for(let obj of data)
        {
          if(this.toAccountNo==<any>obj.AccountNumber)
          {
            this.to_id=<any>obj.CustomerId
            console.log(this.to_id + ' '+<any>obj.CustomerId)
            this.to_bal=<any>obj.Balance
            console.log('erached2')
            this.flag1=true;
          }
        }  
      })
//{InternetBankingId: 5001, CustomerId: 7004, TransactionPassword: 'string', AccountNumber: 10001,
      this.service.getInternetBanking().subscribe(res=>
        {
          console.log(res)
          for(let obj1 of res){
            if(this.fromAccountNo==<any>obj1.AccountNumber && (this.fromAccountNo.toString()==sessionStorage.getItem('UserAccountNumber'))){
              if(this.transactionPassword==<any>obj1.TransactionPassword)
              {

                console.log('erached3')
                this.flag2=true;
              }
            }
          }
        })
      console.log(this.flag+' '+this.flag1+' '+this.flag2)
    
       if(this.flag2==false){
        alert('Entered wrong Transaction Password')
      }
      else if(this.flag&&this.flag1&&this.flag2){
        var imps= {
          fromAccountNo:this.fromAccountNo,
          toAccountNo:this.toAccountNo,
          amount:this.amount,
          mode:this.mode,
          date:this.date,
          time:this.Time,
        } 
        console.log(imps);

        this.service.PostImps(imps).subscribe();

        this.from_bal-=this.amount
        this.to_bal+=this.amount
        var fromObj={
          accountNumber:this.fromAccountNo,
          balance:this.from_bal,
          accountType:'Savings',
          customerId:this.from_id
      }
      var toObj={
        accountNumber:this.toAccountNo,
        balance:this.to_bal,
        accountType:'Savings',
        customerId:this.to_id
      }
      console.log(fromObj)
      console.log(toObj)
        this.service.PutAccount(this.fromAccountNo,fromObj).subscribe();
        this.service.PutAccount(this.toAccountNo,toObj).subscribe();
      }
   
}


}
