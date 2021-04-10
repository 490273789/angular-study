import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wsn-form-module',
  templateUrl: 'form-module.component.html',
  styleUrls: ['form-module.component.scss'],
})
export class FormModuleComponent implements OnInit {
  public itemList: string[];
  public item: string;
  constructor() {}

  /**
   * angular life cycle
   *
   * @memberof FormModuleComponent
   */
  public ngOnInit(): void {
    this.dataInit();
  }

  /**
   * init data
   *
   * @private
   * @memberof FormModuleComponent
   */
  private dataInit(): void {
    this.itemList = [];
  }

  /**
   * click add button add item to list
   *
   * @memberof FormModuleComponent
   */
  public addItem(): void {
    this.itemList.push(this.item);
  }
}
