import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej2',
  templateUrl: './ej2.page.html',
  styleUrls: ['./ej2.page.scss'],
})
export class Ej2Page implements OnInit {

  m: number;
  cm: number;
  pul: number;

  constructor() { }

  ngOnInit() {
    this.m = 0;
    this.cm = 0;
    this.pul = 0;
  }

  fromM() {
    this.cm = this.m * 100;
    this.pul = this.cm / 2.54;
  }

  fromCm() {
    this.m = this.cm / 100;
    this.pul = this.cm / 2.54;
  }

  fromPul() {
    this.cm = this.pul * 2.54;
    this.m = this.cm / 100;
  }

}