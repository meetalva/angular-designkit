import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'button[alButton]',
  template: '<ng-content></ng-content>',
  styleUrls: [
    './button.component.css'
  ]
})

export class AlButtonComponent implements OnInit {
  constructor() {
    console.log("button created")
  }

  ngOnInit() { }
}
