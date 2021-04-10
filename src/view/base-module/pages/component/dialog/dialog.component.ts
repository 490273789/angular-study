import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'wsn-dialog',
  templateUrl: 'dialog.component.html',
  styleUrls: ['dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  @Input() isShow: boolean;
  @Input() title: string;
  @Input() content: string;
  @Input('buttonFont') buttonText: string;
  @Input() fontSize: number;
  @Output() closeDialog = new EventEmitter<string>();
  @Output() fontSizeChange = new EventEmitter<number>();
  constructor() {}

  /**
   * angular life cycle
   *
   * @memberof DialogComponent
   */
  ngOnInit(): void {}

  /**
   * click close button
   *
   * @memberof DialogComponent
   */
  public clickClose(): void {
    this.closeDialog.emit('close');
  }

  /**
   * fontSize add 1
   *
   * @memberof DialogComponent
   */
  public inc(): void {
    this.fontSizeChange.emit(this.fontSize + 1);
  }

  /**
   * fontSize reduce 1
   *
   * @memberof DialogComponent
   */
  public dec(): void {
    this.fontSizeChange.emit(this.fontSize - 1);
  }
}
