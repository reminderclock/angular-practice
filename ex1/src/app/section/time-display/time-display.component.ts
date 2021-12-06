import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.css']
})
export class TimeDisplayComponent implements OnInit {
  @Input() InputData: string= "";
  min: number=0;
  sec: number=0;
  miliSec: number = 0;
  timeInterval: any 
  constructor() { }

  startTime(){
    this.timeInterval = setInterval(()=> {
      this.miliSec++;
    }, 10)
    clearInterval();
  }
  stopTime() {
    clearInterval(this.timeInterval)
  }
  resetTime() {
    this.stopTime();
    this.miliSec = 0;
  }
  playTimer(state:string){
    if(state === 'start') this.startTime();
    else if(state === 'stop') this.stopTime();
    else if(state === "reset") this.resetTime()
  }
  ngOnChanges(changes:{[key:string]:SimpleChange}){
    for(let propName in changes){
      if(propName === "inputData"){
        this.playTimer(changes[propName].currentValue)
      }
    }
  }
  ngOnInit(): void {
  }

}
