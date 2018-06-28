import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reorder',
  templateUrl: './reorder.component.html',
  styleUrls: ['./reorder.component.css']
})
export class ReorderComponent implements OnInit {

  dataSort = [];

  target = -1;
  startIndex  = -1;
  r: any;
  constructor() {
    for (let i = 0; i < 5; i++) {
      this.dataSort.push({index: i, text: 'data' + i});
    }
  }

  ngOnInit() {
  }

}
