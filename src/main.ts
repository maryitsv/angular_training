import './polyfills';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}
// con esta linea indicamos que es una aplicacion web
platformBrowserDynamic().bootstrapModule(AppModule);
