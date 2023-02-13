// Angular module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// app route
import { AppRoutingModule } from '../../app-routing.module';

// services
import { hotelServices } from './registerServices';

// components
import { decls, bsComp } from './registerComponents';

@NgModule({
    declarations: decls, // declare component in registerComponents
    providers: hotelServices, // inject service in registerServices
    bootstrap: [bsComp],
    imports: [
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatMenuModule
    ]
})
export class HotelModule { }