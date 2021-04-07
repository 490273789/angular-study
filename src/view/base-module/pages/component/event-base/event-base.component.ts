import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wsn-event-base',
  templateUrl: 'event-base.component.html',
  styleUrls: ['event-base.component.scss'],
})
export class EventBaseComponent implements OnInit {
  constructor() {}

  public ngOnInit() {}

  public showText(): void {
    alert('click 触发！');
  }

  public clickInner(event: MouseEvent, position: string): void {
    event.stopPropagation();
    alert('click ' + position);
  }

  public clickOuter(position: string): void {
    alert('click ' + position);
  }
}
