import { Component, Input, OnChanges } from '@angular/core';
import { buildLayout} from './helper/layoutLoader'
@Component({
  selector: 'page',
  templateUrl: './template.html',
  styleUrls: ['./style.scss']
})

export class Page implements OnChanges {
  @Input() props: any = {};
  content: any = {}
  constructor() { }

  ngOnChanges() {
    if(this.props?.layout) {
      this.content = this.props.layout.skeleton.content
      buildLayout(this.props.layout.skeleton.content, 'content')
    }
  }
}
