import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionComponent } from './section/section.component';
import { ButtonsComponent } from './section/buttons/buttons.component';
import { TimeDisplayComponent } from './section/time-display/time-display.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    ButtonsComponent,
    TimeDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
