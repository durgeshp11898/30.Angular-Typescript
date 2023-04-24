import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './components/default/default.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { BookComponent } from './components/book/book.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    PagenotfoundComponent,
    BookComponent,
    TechnologiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
