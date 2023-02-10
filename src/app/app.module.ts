import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './services/dataService';
import { HttpClientModule } from '@angular/common/http';
import { Search } from './sharedComponents/search';
import { MultipleDropDown } from './sharedComponents/MultipleDropDown/multipleDropDown';

@NgModule({
  declarations: [
    AppComponent,
    Search,
    MultipleDropDown
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }