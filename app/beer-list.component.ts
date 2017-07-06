import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beer } from './beer.model';

@Component({
  selector: 'beer-list',
  template: `
    <table>
      <tr *ngFor="let currentBeer of childBeerList">
        <td>{{currentBeer.name}}</td>
        <td>{{currentBeer.brand}}</td>
        <td>{{currentBeer.price}}</td>
        <td>{{currentBeer.abv}}</td>
        <td>{{currentBeer.pints}}</td>
        <button (click)="subtractPints(childBeerList.indexOf(currentBeer), 1)">Pint Sold</button>
        <button (click)="subtractPints(childBeerList.indexOf(currentBeer), 5)">Pitcher Sold</button>
        <button (click)="editButtonHasBeenClicked(currentBeer)">Edit</button>
      </tr>
    </table>
  `
})

export class BeerListComponent {
  @Input() childBeerList: Beer[];
  @Output() clickSender = new EventEmitter();
  @Output() soldPintsSender = new EventEmitter();

  editButtonHasBeenClicked(beerToEdit: Beer) {
    this.clickSender.emit(beerToEdit);
  }

  drinkButtonHasBeenClicked(beerToSell: Beer) {
    this.soldPintsSender.emit(beerToSell);
  }

  subtractPints(index, number){
    this.childBeerList[index].pints -= number;
  }
}
