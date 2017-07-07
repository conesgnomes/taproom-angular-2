import { Component, Output, EventEmitter } from '@angular/core';
import { Beer } from './beer.model';

@Component({
  selector: 'new-beer',
  template: `
    <h1>Add a new beer</h1>
    <table>
      <tr>
        <th>Name</th>
        <th>Brand</th>
        <th>Price</th>
        <th>ABV</th>
      </tr>
      <tr>
        <td><input #name type="text" /></td>
        <td><input #brand type="text" /></td>
        <td><input #price type="number" /></td>
        <td><input #abv type="number" /></td>
        <td><button (click)="addBeer(name.value,brand.value,price.value,abv.value); name.value=''; brand.value=''; price.value=''; abv.value='';">Add Beer</button></td>
      </tr>
    </table>
  `
})

export class NewBeerComponent {
  @Output() newBeerSender = new EventEmitter();

  addBeer(name: string, brand: string, price: number, abv: number, pints: number) {
    var newBeerToAdd: Beer = new Beer(name, brand, price, abv, pints);
    this.newBeerSender.emit(newBeerToAdd);
  }
}
