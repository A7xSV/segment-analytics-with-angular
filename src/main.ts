import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

(analytics as any)._writeKey = environment.analytics.segmentWriteKey
analytics.load(environment.analytics.segmentWriteKey)

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
