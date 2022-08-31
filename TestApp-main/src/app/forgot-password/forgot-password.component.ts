import { Component, OnInit } from '@angular/core';
import {ServiceModuleService} from '../../app/service-module.service'

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})


export class ForgotPasswordComponent implements OnInit {

  public customerId:number=0;
  public OTP:number=1234;
  public password:string="";
  public RePassword:string="";
  public flag:boolean=false;
  public flag1:boolean=false;
  public newpass = {};

  constructor(private service:ServiceModuleService) { }

  ngOnInit(): void {
  }
// {RegisterId: 4000, CustomerId: 7003, Password: 'string', 

  updateLoginPassword(){
    
    let registerId:number;
    this.service.getaccount().subscribe(data=>{
      for(let obj of data)
      {
        if(sessionStorage.getItem('UserAccountNumber')==<any>obj.AccountNumber)
        {
            if(this.customerId==<any>obj.CustomerId)
            { 
                this.flag=true; 
                console.log('flag'+this.flag)
            }
        }
      }     
    })
    console.log('reached updateLoginpassword method' + this.customerId)
    console.log('flag'+this.flag)
    this.service.GetRegister().subscribe(data=>{
      console.log(data)
      for(let obj of data){
        if(this.customerId==<any>obj.CustomerId)
        {
          this.flag1=true;
          console.log(<any>obj.RegisterId)
          this.newpass= {
            registerId:<any>obj.RegisterId,
            customerId:this.customerId,
            password:this.password
          };
          this.service.PutRegister(<any>obj.RegisterId,this.newpass).subscribe();
        }
      }
    })
    if(this.flag==false)
    {
      alert('Invalid customer Id')
    }
    if(this.flag1==false)
    {
      alert('Updation failed!!')
    }
// "registerId": 4000,
 // "customerId": 7003,
  //"password": "pass", 
    
   
  }

}
