/*
Angular模块描述应用部件是如何组合在意的，每一个部件至少有一个Angular模块，也就是根模块，

用来引导并运行应用。可以为他起任何名字，常规名字是AppModule。也就是app.module.ts文件。
*/
// BrowserModule,浏览器解析的模块
import { BrowserModule } from '@angular/platform-browser';
// Angular的核心模块
import { NgModule } from '@angular/core';

// 路由模块
import { AppRoutingModule } from './app-routing.module';
// 根组件
import { AppComponent } from './app.component';

// @NgModule接受一个元数据对象，告诉Angular如何编译和启动应用。
@NgModule({
  // 引入当前项目运行的组件
  declarations: [AppComponent],
  // 引入当前模块运行依赖的其他模块
  imports: [BrowserModule, AppRoutingModule],
  // 定义服务，放在这里面
  providers: [],
  // 指定应用的主视图通过引导根AppModule来启动应用，这里一般写的是根组件
  bootstrap: [AppComponent],
})
// 更模块不需要导出任何东西，因为其他组件不需要导入根模块。但是一定要写。
export class AppModule {}
