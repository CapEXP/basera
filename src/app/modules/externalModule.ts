import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const externalModules = [
    NgModule,
    BrowserModule,
    HttpClientModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule
]

