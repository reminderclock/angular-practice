import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionComponent } from './section/section.component';
import { ButtonsComponent } from './section/stopwatch/buttons/buttons.component';
import { TimeDisplayComponent } from './section/stopwatch/time-display/time-display.component';
import { LayoutModule } from './layout/layout.module';
import { SectionModule } from './section/section.module';

// 루트 모듈
// 하나 이상의 모둘을 가지게됨
// 자스에서는 하나의 모듈이 하나의 파일..


@NgModule({
  declarations: [
    AppComponent,
  ],
  // 다른 모듈을 가져옴
  // app에서 layout module에 있는 컴포넌트를 사용할수 있다. 
  // layout모듈에서 testcomponet를 export 해주어야 사용할수 있다. 
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    SectionModule,
  ],
  exports:[
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
