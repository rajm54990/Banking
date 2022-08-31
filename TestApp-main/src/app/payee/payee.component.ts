import { Component, OnInit } from '@angular/core';
import {ServiceModuleService} from '../../app/service-module.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-payee',
  templateUrl: './payee.component.html',
  styleUrls: ['./payee.component.css']
})
export class PayeeComponent implements OnInit 
{

    BeneficiaryName:string='';
    BeneficiaryAccountNo:number=0;
    NickName:string='';
    AccountNumber:number=0;
    public flag1:boolean=false;
    public flag2:boolean=false;
    
    public getAccount:any = [];
    public getBeneficiary:any= [];
    constructor(private service:ServiceModuleService,private router: Router) {}

    
    ngOnInit(): void {
      
    }
    public deleteCookie(){
      sessionStorage.clear();
      this.router.navigateByUrl('/login');   
    }
 
    getAcc():any
    {
    let n1:number=0
    let n2:number=0
      this.service.getaccount().subscribe(data=>{
      this.getAccount=data
      console.log(data);
      for(let a of data)
      {
        console.log(<any>a.AccountNumber+" "+this.BeneficiaryAccountNo)
        if(<any>a.AccountNumber==this.BeneficiaryAccountNo)
        {
            console.log(<any>a.AccountNumber+" "+this.BeneficiaryAccountNo)
            n1=1
            console.log('n1'+n1)
            break;
        }
      }

    });

    this.service.GetBeneficiary().subscribe(res=>{
      this.getBeneficiary=res
      for(let ben of res){
          if(n1==1)
          {
              if(<any>ben.BeneficiaryAccountNo==this.BeneficiaryAccountNo && <any>ben.AccountNumber==sessionStorage.getItem('UserAccountNumber'))
              {
                n2=1
                console.log('n2'+n2)
                break;
              }
          }
      }
    });
    console.log('n1'+n1)
    console.log('n2'+n2)
    if(n1==1)
    {
      if(n2==1){
        return false
      } 
      else if(n2==0){
        return true
      } 
    }
    else
  return false
}


  addpayee()
  {
      
      var payee=
      {
        BeneficiaryName:this.BeneficiaryName,
        BeneficiaryAccountNo:this.BeneficiaryAccountNo,
        NickName:this.NickName,
        AccountNumber:sessionStorage.getItem('UserAccountNumber')
      }
      let  f = this.getAcc()
      console.log(f)
      console.log(payee);

      this.service.Postbeneficiary(payee).subscribe();
      if(f){
        alert('Beneficiary is added Successfully')
      }else{
        alert('Enter valid Beneficiary account number')
      }
      
      
  }
}
