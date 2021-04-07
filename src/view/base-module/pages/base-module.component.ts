import { Component, OnInit } from '@angular/core';

export interface HeroList {
  id: string;
  name: string;
  info: string;
}

export interface StyleExpression {
  backgroundColor: string;
  color: string;
  width: string;
}

@Component({
  // 标签选择器
  selector: 'wsn-base-module',
  // 引入模板
  // 内链模式，模板简单的情况下可以使用
  // template: `
  //   <b>inline mode</b>
  //  <div class="row-style">{{ title }}</div>
  // `
  templateUrl: 'base-module.component.html',
  // 引入样式
  styleUrls: ['base-module.component.scss'],
})
export class BaseComponent implements OnInit {
  // 定义string类型的变量
  public title: string;
  public gender: number;
  public htmlContent: string;
  public titleOne: string;
  public titleTwo: string;
  public titleThree: string;
  public msg: string;
  public heroList: [{ name: 'wsn' }];
  public customerTitle: string;
  public isBlueBackground: boolean;
  public isWhiteFont: boolean;
  public buttonStyle1: string;
  public buttonStyle2: object;
  public buttonStyle3: string[];
  public styleExpression: StyleExpression;
  constructor() {}

  /**
   * ngOnInit
   *
   * @memberof BaseComponent
   */
  public ngOnInit(): void {
    this.initData();
  }

  private initData(): void {
    this.title = 'bind title';
    this.gender = 1;
    this.htmlContent = 'use the [innerHTML] parse';
    this.titleOne = '1';
    this.titleTwo = '2';
    this.titleThree = '3';
    this.msg = 'bind property';
    this.customerTitle = '自定义属性';
    this.isBlueBackground = true;
    this.isWhiteFont = true;
    this.buttonStyle1 = 'blueBackground button';
    this.buttonStyle2 = { blueBackground: true, button: true };
    this.buttonStyle3 = ['blueBackground', 'button'];
    this.styleExpression = {
      backgroundColor: '#abcdef',
      color: '#ff6666',
      width: '100px'
    };
  }

  /**
   * getValue
   *
   * @return {*}  {string}
   * @memberof BaseComponent
   */
  public getValue(): string {
    return '可以写变量、函数、判断或运算';
  }
}
