import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.css']
})
export class TimeDisplayComponent implements OnInit {
  // 배열을 초기화 해주어야 한다.
  @Input() inputData: string= "";
  // timeText:string ="00:00.00";
  minutes:number = 0;
  seconds:number = 0;
  miliSeconds: number = 0;
  timeInterval:any
  constructor() { 
    // console.log(this.inputData)
    // setInterval(()=> {
    //   this.test++;
    // },1000)
  }
  timeStart(){
    this.timeInterval = setInterval(() => {
      this.miliSeconds++;
    },10)
    clearInterval()
  }
  timeStop() {
    clearInterval(this.timeInterval)
  }

  timeReset(){
    this.timeStop();
    this.miliSeconds = 0;
  }
  // console.log(changes)
  playTimer(state: string) {
    if(state === "start") this.timeStart();
    else if(state === 'stop') this.timeStop();
    else if(state === 'reset') this.timeReset();
  }
  // interface IChanges {[key:string]:SimpleChange}
  ngOnChanges(changes: {[key:string]:SimpleChange}){
    console.log(changes)
    for(let propName in changes){
      if(propName === "inputData") {
        this.playTimer(changes[propName].currentValue)
        // this.timeStart()
        }
      }
    }

  ngOnInit(): void {
  }

}
