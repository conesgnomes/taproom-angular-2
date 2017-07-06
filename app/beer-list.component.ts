import { Component, Input } from '@angular/core';
import { Beer } from './beer.model';

@Component({
  selector: 'beer-list',
  template: `
    <table>
      <tr *ngFor="let beer of childBeerList">
          <td>{{beer.name}}</td>
          <td>{{beer.brand}}</td>
          <td>{{beer.price}}</td>
          <td>{{beer.abv}}</td>
      </tr>
    </table>
  `
})

export class BeerListComponent {
  @Input() childBeerList: Beer[];
}
