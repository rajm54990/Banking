import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // public bank = ["assets/images/bank_1.jpg","assets/images/bank_officers.jpg","assets/images/coin_track.jpg","assets/images/payments.jpg","assets/images/ethics.jpg","assets/images/gold_loans.jpg"]

  constructor() { }

  ngOnInit(): void {
  }

}
