import { Component, OnInit } from '@angular/core';
import {ServiceModuleService} from '../../app/service-module.service'
@Component({
  selector: 'app-customers-view',
  templateUrl: './customers-view.component.html',
  styleUrls: ['./customers-view.component.css']
})
export class CustomersViewComponent implements OnInit {

  public list:any=[];
  constructor(private service:ServiceModuleService) { }

  ngOnInit(): void {
    this.Customer();
  }

  Customer(){
      this.service.GetCreateNewAccount().subscribe(data=>
        {
          this.list=data;
        })
  }

}
