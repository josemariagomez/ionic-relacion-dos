import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej1',
  templateUrl: './ej1.page.html',
  styleUrls: ['./ej1.page.scss'],
})
export class Ej1Page implements OnInit {

  type: string;
  min: number;
  max: number;
  value: number;

  constructor() { }

  ngOnInit() {
    this.type = 'none';
    this.min = 0;
    this.max = 0;
    this.value;
  }

  generate() {
    this.value = +this.min + Math.floor(Math.random() * (this.max - this.min + 1));
    this.type = 'none';
  }

  click() {
    if (this.value == this.max) {
      this.type = 'max';
      this.value = this.min;
    } else {
      this.type = 'min';
      this.value = this.max;
    }
  }

}
