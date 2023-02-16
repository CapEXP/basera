import { Component } from '@angular/core';

@Component({
  selector: 'location-input',
  templateUrl: './LocationInput.html',
})
export class LocationInput {
  constructor() {}
  changeHandler(event: any) {
    console.log(event.target.value);
  }
}
