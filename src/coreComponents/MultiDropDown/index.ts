import { Component } from '@angular/core';

@Component({
  selector: 'multi-dropdown',
  templateUrl: './template.html'
})

export class MultiDropDown {
  constructor() { }
    rooms = 0;
    adults = 0;
    children = 0;

    setRooms(roomType: any) {
        switch (roomType) {
            case 'increment':
                this.rooms++
                break;
            case 'decrement':
                if(this.rooms > 0)
                this.rooms--
                break;
            default:
                this.rooms
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