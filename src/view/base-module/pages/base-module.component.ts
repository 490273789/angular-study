import { Component, OnInit } from '@angular/core';

export interface HeroList {
  id: string;
  name: string;
  info: string;
}
@Component({
  selector: 'wsn-base-module',
  templateUrl: 'base-module.component.html',
  styleUrls: ['base-module.component.scss'],
})
export class BaseComponent implements OnInit {
  // 定义string类型的变量
  public title: string;
  public htmlContent: string;
  public id: string;
  public msg: string;
  public heroList: [{name: 'wsn'}];
  public isShow: boolean;
  constructor() {}

  /**
   * @description: Angular life sycle
   * @param {*}
   * @return {*}
   */
  ngOnInit(): void {
    this.initData();
  }

  private initData(): void {
    this.title = 'bind title';
    this.htmlContent = 'use the [innerHTML] parse';
    this.id = '123';
    this.msg = 'bind property';
    this.isShow = true;
  }

  /**
   * control show function
   *
   * @memberof BaseComponent
   */
  public controlIsShow(): void {
    this.isShow = !this.isShow;
  }
}
