import { Component, OnInit } from '@angular/core';
import {ServiceModuleService} from '../../app/service-module.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  public newRegistrations:any=[];
  public id:number=0;
  public list:any=[];

  constructor(private service:ServiceModuleService,private router: Router) { }

  ngOnInit(): void {
    this.getRegistrationDetails();
  }
  
  public getRegistrationDetails()
  {
   	this.service.GetCreateNewAccount().subscribe(data=>
      {
        this.list=data
        console.log('list')
        console.log(this.list)
        for(let obj of data){
          console.log(data)
          this.service.GetRegister().subscribe(res=>
            {
              for(let obj1 of res){
                if(<any>obj.CustomerId!=<any>obj1.CustomerId)
                {
                  console.log(<any>obj.CustomerId+' '+<any>obj1.CustomerId)
                  this.newRegistrations=data;
                  console.log(this.newRegistrations)
                }
              }
            })
        }

      })
  }
  Customers(){
    this.router.navigateByUrl('/Customer-view');
  }
   public approve()
    {
      alert('All Accounts Approved');
   }
   public reject(){
      console.log(this.id)
      this.service.DeleteCreateNewAccount(this.id).subscribe();
      alert()
   }
}


