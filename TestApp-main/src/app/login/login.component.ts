import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {ServiceModuleService} from '../../app/service-module.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
  }
  public flag:boolean=false;
  public customerId:number=0; 
  public password:string ='';

  constructor(private service:ServiceModuleService,private router: Router) { }

  public stores:any = [];
  public accountdetails:any = [];
  public arr:any = [];

  getCookies(){
    
    this.service.GetRegister() //validate user credentials
    .subscribe(data=>{this.stores=data
    console.log(data)
    if(this.password.length<8)
    {
      alert('Enter password of minimum length of 8')
    }
    if(this.customerId==1234&&this.password=='adminpass')
    {
      this.flag=true;
      alert('Admin Logged in!!')
      this.router.navigateByUrl('/admin-panel');
    }
    for (let obj of data) 
    {
      console.log(<any>obj.CustomerId + " " + <any>obj.Password);
      console.log('input' + this.customerId + ' ' + this.password)
      if(<any>obj.CustomerId==this.customerId && <any>obj.Password==this.password)
      {
        console.log('reached')
        this.flag=true;
        this.service.getaccount().subscribe(res=> { 
        this.accountdetails=res
        for(let obj1 of res)
        {
          if(<any>obj1.CustomerId==this.customerId)
          {
            sessionStorage.setItem('UserAccountNumber',<any>obj1.AccountNumber);
          }
        }
    });
    
// {AccountNumber: 10000, Balance: 10000, AccountType: 'string', CustomerId: 7003, Customer: null, …}
        this.router.navigateByUrl('/profile');
      }
    }
    if(this.flag==false)
    {
      alert("Invalid login credentials!!")
    }

  });

    
  
  }


  
}
  