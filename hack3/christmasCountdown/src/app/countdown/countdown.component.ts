import { Component, OnInit, Input } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  @Input() christmasDay = new Date("25 Dec 2020 00:00:00 GMT").getTime();
  @Input() now = new Date().getTime();
  @Input() timer = this.christmasDay - this.now;

  private test = 0;
  
  @Input() days = Math.trunc(this.timer/ (1000*60*60*24));
  @Input() hours = Math.trunc(this.timer %(1000*60*60*24))/(1000*60*60);
  @Input() minutes = Math.trunc(this.timer %(1000*60*60))/(1000*60);
  @Input() seconds = Math.trunc(this.timer %(1000*60))/(1000);
  
  constructor() { 
  }

  ngOnInit() {
    setInterval(this.countTime, 1000)
  }

  countTime() {
    this.christmasDay = this.christmasDay - 1000;
    this.test = this.test + 1;
    console.log("test");
  }

}
