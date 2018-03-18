import { AlButtonModule } from './components/button';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AlHeadlineModule } from './components/headline';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AlButtonModule,
    AlHeadlineModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
