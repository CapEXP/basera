import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../config/appConfig';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Logger } from '../Logger';

export interface Response {
  url: string;
  data: any;
}

export interface SearchObj {
  location: string;
  fromDate: Date;
  toDate: Date;
  guests: {
    adults: number,
    children: number
  }
  rooms: number
}

@Injectable({
    providedIn: 'root',
})

export class DataService {
    constructor(private http: HttpClient) { }
    search: SearchObj = {
      location: 'US',
      fromDate: new Date(),
      toDate: new Date(),
      guests: {
        adults: 0,
        children: 0
      },
      rooms: 0
    }
    logger = new Logger()

    getData(url: string): any {
       return this.http.get<Response>(`${config.env}${url}`);
    }
    setSearch(search: SearchObj) {
      this.search = search
    }
}