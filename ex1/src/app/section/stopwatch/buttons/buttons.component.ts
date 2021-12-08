import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  @Output() clickEvent = new EventEmitter<string>()
  constructor() { }
  start(){
    console.log('dd')
    this.clickEvent.emit('start')
  }
  stop(){
    this.clickEvent.emit("stop")
  }
  reset(){
    this.clickEvent.emit('reset')
  }
  ngOnInit(): void {
  }

}
