import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  // 이컴포넌트는 clickEvent라고 이름 지어진 이벤트를 만들수 있다. 
  @Output() clickEvent = new EventEmitter<string>();
  constructor() { }
  start(){
   this.clickEvent.emit('start');
  }
  stop(){
    this.clickEvent.emit('stop')
  }
  reset() {
    this.clickEvent.emit('reset')
  }

  ngOnInit(): void {
  }

}
