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

@Injectable({
    providedIn: 'root',
})

export class DataService {
    constructor(private http: HttpClient) { }
    logger = new Logger()

    getData(url: string): any {
       return this.http.get<Response>(`${config.env}${url}`);
    }
}