import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../../app-routing.module';
import { Home } from '../../pages/home/home';
import { DataService } from '../../services/dataService';
import { HttpClientModule } from '@angular/common/http';
import { Search } from '../../sharedComponents/search';
import { TopBanner } from 'src/app/customComponents/topBanner';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiDropDown } from 'src/app/sharedComponents/MultiDropDown';

@NgModule({
    declarations: [
        Home,
        Search,
        TopBanner,
        MultiDropDown
    ],
    providers: [
        DataService
    ],
    bootstrap: [Home],
    imports: [
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatMenuModule
    ]
})
export class HotelModule { }