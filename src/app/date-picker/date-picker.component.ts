import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  date: any;
  mode = 'dropdown';
  format = 'DD-MM-YYYY';
  constructor() { }

  ngOnInit() {
  }

  selectedDate(event: any) {
    console.log(event);
    this.date = event;
  }
}
