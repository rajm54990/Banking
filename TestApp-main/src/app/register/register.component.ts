import { Component, OnInit } from '@angular/core';
import {ServiceModuleService} from '../../app/service-module.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  constructor(private ser:ServiceModuleService) { 
    
  }
    
  public customerId:number=0;
  public Password:string="";
  public Reenter_Password:string="";
  public otp:string="";
   ngOnInit(): void {
  }

  reg()
  {
      var details = {
      customerId:this.customerId,
      Password:this.Password,
      Reenter_Password:this.Reenter_Password,
      otp:this.otp
    }
    console.log(details);
    this.ser.PostRegister(details).subscribe();
    alert('Your regsitertation is successful!!');
}

  

}
