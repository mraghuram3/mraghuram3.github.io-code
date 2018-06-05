import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resize',
  templateUrl: './resize.component.html',
  styleUrls: ['./resize.component.css']
})
export class ResizeComponent implements OnInit {


  width = 300;
  height = 200;
  top = 120;
  left = 200;

  constructor() { }

  ngOnInit() {
  }

}
