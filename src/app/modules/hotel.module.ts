import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';
import { Home } from '../pages/home/home';
import { DataService } from '../services/dataService';
import { HttpClientModule } from '@angular/common/http';
import { Search } from '../sharedComponents/search';

@NgModule({
  declarations: [
    Home,
    Search,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [
    DataService
  ],
  bootstrap: [Home]
})
export class HotelModule { }
