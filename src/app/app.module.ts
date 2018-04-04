import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material';


import { AppComponent } from './app.component';
import { CricketComponent } from './cricket/cricket.component';


@NgModule({
  declarations: [
    AppComponent,
    CricketComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
