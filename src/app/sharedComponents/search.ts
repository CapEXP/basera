import { Component } from '@angular/core';
import { DataService } from '../services/dataService';
import { config } from '../config/appConfig';
import { User } from '../model/User';

@Component({
  selector: 'search',
  templateUrl: './search.html'
})
export class Search {
  constructor() { }
}
