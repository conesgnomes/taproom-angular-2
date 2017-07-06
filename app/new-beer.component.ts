import { Component, Output, EventEmitter } from '@angular/core';
import { Beer } from './beer.model';

@Component({
  selector: 'new-beer',
  template: `
    <h1>Add a new beer</h1>
    <input #name type="text" />
    <input #brand type="text" />
    <input #price type="number" />
    <input #abv type="number" />
    <button (click)="addBeer(name.value,brand.value,price.value,abv.value); name.value=''; brand.value=''; price.value=''; abv.value='';">Add Beer</button>
  `
})

export class NewBeerComponent {
  @Output() newBeerSender = new EventEmitter();

  addBeer(name: string, brand: string, price: number, abv: number, pints: number) {
    var newBeerToAdd: Beer = new Beer(name, brand, price, abv, pints);
    this.newBeerSender.emit(newBeerToAdd);
  }
}
