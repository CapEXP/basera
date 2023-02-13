import { Component, Output, EventEmitter, OnChanges, DoCheck } from '@angular/core';
import { DataService } from '../../services/dataService';
import { config } from '../../../config/appConfig';
import { User } from '../../model/User';
import { buildLayout } from 'src/layoutBuilder/Page/helper/layoutLoader';

@Component({
  selector: 'app-root',
  templateUrl: './template.html',
  styleUrls: ['./style.scss']
})
export class Home implements DoCheck {
  title: string = 'basera';
  layout: any
  header: any
  footer: any
  buildLayoutCalled = false

  constructor(private dataService: DataService) { }


  ngOnInit(): void {
    this.dataService.getData(`${config.metadata}/hotel/layout/home`)
      .subscribe((response: any) => {
        this.layout = response
        this.header = response.layout.skeleton.header
        this.footer = response.layout.skeleton.footer
      });
  }

  ngDoCheck() {
    if(this.header && !this.buildLayoutCalled) {
      this.buildLayoutCalled = true
      buildLayout(this.header, 'homepage heder')
      buildLayout(this.header, 'homepage footer')
    }
  }
}
