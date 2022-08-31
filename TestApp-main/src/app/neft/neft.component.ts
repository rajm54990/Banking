import { Component, OnInit } from '@angular/core';
import {ServiceModuleService} from '../../app/service-module.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-neft',
  templateUrl: './neft.component.html',
  styleUrls: ['./neft.component.css']
})
export class NeftComponent implements OnInit {

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
  public mode:string ="NEFT";
  public date:string='';
  public transactionPassword:string='';
  public time:string='';
  public dateTime = new Date();

  public Time:string = this.dateTime.toString().substring(16,24);

  flag:boolean=false;
  flag1:boolean=false;
  flag2:boolean=false;

  public submitNeft(){
    this.service.getaccount().subscribe(data=>
      {
        for(let obj of data)
        {
          if(this.fromAccountNo==<any>obj.AccountNumber)
          {
            console.log('erached1')
            this.flag=true;
          }
        }
        for(let obj of data)
        {
          if(this.fromAccountNo==<any>obj.AccountNumber)
          {
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
                console.log('erached3'+sessionStorage.getItem('UserAccountNumber'))
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
        var neft= {
          fromAccountNo:this.fromAccountNo,
          toAccountNo:this.toAccountNo,
          amount:this.amount,
          mode:this.mode,
          date:this.date,
          time:this.Time,
        }
        console.log(neft);
        this.service.PostNeft(neft).subscribe();
      }
}
}
