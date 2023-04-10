import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstCompoComponent } from './first-compo/first-compo.component';
import { SecondCompoComponent } from './second-compo/second-compo.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstCompoComponent,
    SecondCompoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
