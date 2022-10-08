import { Component, OnInit } from '@angular/core';
import { trips } from '../data/trips';

@Component({
  selector: 'app-trip-listing',
  templateUrl: './trip-listing.component.html',
  styleUrls: ['./trip-listing.component.css']
})
export class TripListingComponent implements OnInit {

  // variable = trips, which is an array of any, and it's assigned the value fo trips from ../data/trips
  trips: Array<any> = trips;

  constructor() { }

  ngOnInit() {
  }

}
