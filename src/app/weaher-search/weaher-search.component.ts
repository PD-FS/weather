import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-weaher-search',
  templateUrl: './weaher-search.component.html',
  styleUrls: ['./weaher-search.component.css']
})
export class WeaherSearchComponent implements OnInit {

  @Output() searchEvent: EventEmitter<string> = new EventEmitter<string>();

  loading: boolean;
  cityName: string;

  constructor() { }

  ngOnInit(): void {

    this.loading = false;
  }

  // tslint:disable-next-line:one-line
  public searchCity($event){
    this.loading = !this.loading;
    this.searchEvent.emit(this.cityName);
  }

}


