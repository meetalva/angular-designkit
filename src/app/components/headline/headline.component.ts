import { Component, Input, OnInit } from '@angular/core';
import { HeadlineProps, Level, TextAlign } from './index';

@Component({
  selector: 'headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss']
})
export class AlHeadlineComponent implements HeadlineProps, OnInit {
  Level = Level;

  @Input() className?: string;
  @Input() level: Level;
  @Input() textAlign?: TextAlign = TextAlign.Left;
  @Input() text: string = "Lorem ipsum";
  @Input() color: string = 'inherit';
  @Input() uppercase: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  getTextAlign() {
    switch(this.textAlign) {
      case TextAlign.Left: return 'left';
      case TextAlign.Center: return 'center';
      case TextAlign.Right: return 'right';
      default: return 'left';
    }
  }
}
