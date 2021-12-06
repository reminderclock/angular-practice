import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  commandText:string = ""
  present:string = "welcome"
  constructor() { }
  startTime($event:string){
   this.present = $event
  }
  ngOnInit(): void {
  }

}
