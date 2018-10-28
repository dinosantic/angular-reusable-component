import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'cm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input()header: string;

  @Output() titleClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  titleClickedEvent() {
    this.titleClicked.emit(this.header);
  }

}
