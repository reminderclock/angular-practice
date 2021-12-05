import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.css']
})
export class TimeDisplayComponent implements OnInit {
  // 배열을 초기화 해주어야 한다.
  @Input() inputData: string= "";
  test = 1;
  constructor() { 
    // console.log(this.inputData)
    // setInterval(()=> {
    //   this.test++;
    // },1000)
  }

  ngOnChanges(changes: SimpleChange){
    console.log(changes)
    for(let propName in changes){

    }
  }
  ngOnInit(): void {
  }

}
