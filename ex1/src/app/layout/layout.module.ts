import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';



@NgModule({
  // 의존되는 컴포넌트 생겼다. 
  declarations: [
    FooterComponent,
    HeaderComponent,
  ],
  // 앵귤러 모듈이 TestCompnent를 내보낼준비 되어있다.
  // 다른 모듈이 사용할수 있다. 
  exports:[FooterComponent, HeaderComponent],

  //
  imports: [
    CommonModule
  ]
})
// 모듈을 만들어 준것
export class LayoutModule { }
