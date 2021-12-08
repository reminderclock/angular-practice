import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StopwatchComponent } from '../section/stopwatch/stopwatch.component';

@Injectable({
  providedIn: StopwatchComponent
})
export class PageToggleService {
  routingCount = 0;
  constructor(private router: Router) { }
  pulsCount() {
    this.routingCount++;
  }
  goPage(target : any){
    this.routingCount++;
    this.router.navigateByUrl(target)
  }

}
