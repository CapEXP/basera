import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';
import { Home } from '../pages/home/home';
import { DataService } from '../services/dataService';
import { HttpClientModule } from '@angular/common/http';
import { Search } from '../sharedComponents/search';
import { MultipleDropDown } from "../sharedComponents/MultipleDropDown/multipleDropDown";

@NgModule({
    declarations: [
        Home,
        Search,
        MultipleDropDown
    ],
    providers: [
        DataService
    ],
    bootstrap: [Home],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
    ]
})
export class HotelModule { }
