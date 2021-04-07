import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
// bootstrapModule会找到AppModule中的bootstrap，将里面的组件实例化，并加入到index.html的<app-root></app-root>节点中
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
