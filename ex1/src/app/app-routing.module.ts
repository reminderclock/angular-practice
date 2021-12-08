import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: 'stopwath', pathMatch: 'full' },
];

@NgModule({
  // 라우터 모듈이 루트 부분에 임포트 된다.
  // 모든
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
