import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.css']
})
export class VirtualScrollComponent implements OnInit {


  displayData = [];
  actualIndex = 0;
  data = [];
  row:any;
  constructor() {
    for (let i = 0; i < 100000; i++) {
      this.data.push(i);
    }
  }

  ngOnInit() {
  }

  onChangeData(event: any) {
    // console.log(event);
     this.displayData = event.data;
     this.actualIndex = event.startIndex;
   }


}
