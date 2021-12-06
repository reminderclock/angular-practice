import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.css']
})
export class TimeDisplayComponent implements OnInit {
@Input() inputData : string = "";
timeInterval:any;
min:number=0;
sec:number=0;
miliSec:number=0;
  constructor() { }
  getTime(){
    this.miliSec++;
    if(this.miliSec === 100) {
      this.sec++;
      this.miliSec =0;
    }
    if(this.sec === 60){
      this.min++;
      this.sec=0;
    }
  }
  startTime(){
    this.timeInterval = setInterval(()=> {
      this.getTime()
    }, 10)
    clearInterval()
  }
  stopTime(){
    clearInterval(this.timeInterval)
  }

  resetTime(){
    clearInterval(this.timeInterval)
    this.miliSec = 0;
    this.sec=0;
    this.min=0;
  }

  playTimer(state:string){
    if(state === 'start') this.startTime();
    else if(state === "stop") this.stopTime();
    else if(state === "reset") this.resetTime();
  }
  ngOnChanges(changes:{[key:string]:SimpleChange}){
    for(let propName in changes){
      if(propName === "inputData"){
        this.playTimer(changes[propName].currentValue);
      }
    }
  }
  ngOnInit(): void {
  }

}
