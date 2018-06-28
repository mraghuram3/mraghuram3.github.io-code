import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resize',
  templateUrl: './resize.component.html',
  styleUrls: ['./resize.component.css']
})
export class ResizeComponent implements OnInit {


  width = 350;
  height = 200;
  top = 50;
  left = 200;

  constructor() { }

  ngOnInit() {
  }

}
