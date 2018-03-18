import { Component } from '@angular/core';
import { Level, TextAlign } from './components/headline';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  TextAlign = TextAlign;
  Level = Level;
}
