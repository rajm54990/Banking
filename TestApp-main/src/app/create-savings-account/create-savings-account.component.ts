import { Component, OnInit } from '@angular/core';
import {ServiceModuleService} from '../../app/service-module.service'

@Component({
  selector: 'app-create-savings-account',
  templateUrl: './create-savings-account.component.html',
  styleUrls: ['./create-savings-account.component.css']
})
export class CreateSavingsAccountComponent{


  constructor(private service:ServiceModuleService) { }
  
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
  public occupationType:string="";
  public sourceOfIncome:string="";
  public grossAnnualIncome:string="";

  createAccount(){
    if(this.firstName.length==0 || this.lastName.length==0||this.emailId.length==0||this.mobileNumber.length==0)
    {
      alert('Enter the input properly ')
    }
    if(this.mobileNumber.length!=10)
    {
      alert('Invalid mobile Number')
    }
    var accountDetails = {
    customerId:0,
    title:this.title,
    firstName:this.firstName,
    middleName:this.middleName,
    lastName:this.lastName,
    fatherName:this.fatherName,
    mobileNumber:this.mobileNumber,
    emailId:this.emailId,
    addressLine1:this.addressLine1,
    addressLine2:this.addressLine2,
    landmark:this.landmark,
    state:this.state,
    city:this.city,
    pincode:this.pincode,
    aadharNumber:this.aadharNumber,
    occupationType:this.occupationType,
    sourceOfIncome:this.sourceOfIncome,
    grossAnnualIncome:this.grossAnnualIncome

    }
    alert('Your record has been added successfully!!');
    this.service.PostCreateNewAccount(accountDetails).subscribe();

  
  }
  
  

}
