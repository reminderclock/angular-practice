import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageToggleService } from 'src/app/share/page-toggle.service';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css'],
  providers: [PageToggleService]
})
export class StopwatchComponent implements OnInit {
  present:string = ""
  routingCount:any
  startTime($event: string){
    this.present = $event;
  }
  goClock() {
    // this.router.navigateByUrl('/clock')
    this.pageToggleService.goPage('/clock')
  }
  constructor(private router: Router, public pageToggleService: PageToggleService) {
    
   }

  ngOnInit(): void {
  }

}
