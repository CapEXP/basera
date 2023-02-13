import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { HotelModule } from './app/modules/hotel/hotel.module';


platformBrowserDynamic().bootstrapModule(HotelModule)
  .catch(err => console.error(err));
