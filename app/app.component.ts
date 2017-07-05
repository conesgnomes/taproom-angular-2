import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Beer me</h1>

      <table>
        <tr *ngFor="let beer of beers">
            <td>{{beer.name}}</td> <td><button (click)="removeBeer(beer)">Delete</button></td>
        </tr>
      </table>

      <input #name type="text" />
      <input #brand type="text" />
      <input #price type="number" />
      <input #abv type="number" />
      <button (click)="addBeer(name.value,brand.value,price.value,abv.value)">Add Beer</button>
  </div>
    `
})

export class AppComponent {

  beers: Array<Beer>;
  constructor(){
    this.beers = [];
  }

  addBeer(name, brand, price, abv){
    let beer = new Beer(name, brand, price, abv);
    this.beers.push(beer);
  }

  removeBeer(beer){
    let index = this.beers.indexOf(beer);
    this.beers.splice(index,1);
  }
}

export class Beer {

  constructor(public name: string, public brand: string, public price: number, public abv: number) {
    this.name = name,
    this.brand = brand,
    this.price = price,
    this.abv = abv;
  }
}
