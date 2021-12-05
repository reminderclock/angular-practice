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

    },10)
    clearInterval()
  }
  ngOnChanges(changes: SimpleChange){
    console.log(changes)
    for(let propName in changes){
      if(propName === "inputData" && changes[propName].currentValue == "start") {
        this.timeStart()
        }
      }
    }
  }
  ngOnInit(): void {
  }

}
