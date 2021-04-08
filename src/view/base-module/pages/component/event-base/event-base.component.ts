import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wsn-event-base',
  templateUrl: 'event-base.component.html',
  styleUrls: ['event-base.component.scss'],
})
export class EventBaseComponent implements OnInit {
  constructor() {}

  /**
   * angular lifecycle
   *
   * @memberof EventBaseComponent
   */
  public ngOnInit(): void {}

  /**
   * click event
   *
   * @memberof EventBaseComponent
   */
  public showText(): void {
    alert('click 触发！');
  }

  /**
   * click inner circular
   *
   * @param {MouseEvent} event
   * @param {string} position
   * @memberof EventBaseComponent
   */
  public clickInner(event: MouseEvent, position: string): void {
    event.stopPropagation();
    alert('click ' + position);
  }

  /**
   * click outer circular
   *
   * @param {string} position
   * @memberof EventBaseComponent
   */
  public clickOuter(position: string): void {
    alert('click ' + position);
  }
}
