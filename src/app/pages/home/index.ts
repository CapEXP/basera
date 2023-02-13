import { Component } from '@angular/core';
import { DataService, SearchObj } from '../../services/dataService';
import { config } from '../../../config/appConfig';

@Component({
  selector: 'app-root',
  templateUrl: './template.html',
  styleUrls: ['./style.scss']
})
export class Home {
  title: string = 'basera';
  layout: any = {}

  constructor(private dataService: DataService) { }


  ngOnInit(): void {
    this.dataService.getData(`${config.metadata}/hotel/layout/home`)
      .subscribe((response: any) => {
        this.layout = response
      });
  }
  setSearch(search: SearchObj): void {
    this.dataService.setSearch(search)
  }
}
