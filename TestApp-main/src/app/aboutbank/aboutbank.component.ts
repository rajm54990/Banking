
  import { Component, OnInit, ViewChild } from '@angular/core';
  import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-aboutbank',
  templateUrl: './aboutbank.component.html',
  styleUrls: ['./aboutbank.component.css']
})
export class AboutbankComponent implements OnInit {

  public bank = ["assets/images/bank_1.jpg","assets/images/bank_officers.jpg","assets/images/coin_track.jpg","assets/images/payments.jpg","assets/images/ethics.jpg","assets/images/gold_loans.jpg"]
  constructor() { }

  ngOnInit(): void {
  }

}
