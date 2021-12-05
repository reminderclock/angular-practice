import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  count=0;
  constructor() { }
  start(){
   this.count++;
  }

  ngOnInit(): void {
  }

}
