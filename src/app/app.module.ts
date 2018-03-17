import { AlButtonModule } from './components/button/index';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AlButtonModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
