import { Component } from '@angular/core';

@Component({
  selector: 'multipleDropDown',
  templateUrl: './multipleDropDown.html'
})
export class MultipleDropDown {
  constructor() { }
    rooms = 0;
    adults = 0;
    children = 0;

    setCounter(counter: any, roomType: any) {
        switch (roomType) {
            case 'increment':
                counter++
                break;
            case 'decrement':
                if(counter > 0)
                counter--
                break;
            default:
                counter
                break;
        }
    }
    setAdults(setType: any) {
        switch (setType) {
            case 'increment':
                this.adults++
                break;
            case 'decrement':
                if(this.adults > 0)
                this.adults--
                break;
            default:
                this.adults
                break;
        }
    }
    setChildren(setType: any) {
        switch (setType) {
            case 'increment':
                this.children++
                break;
            case 'decrement':
                if(this.children > 0)
                this.children--
                break;
            default:
                this.children
                break;
        }
    }
}
