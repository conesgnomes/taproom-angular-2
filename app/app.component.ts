import { Component } from '@angular/core';
import { Beer } from './beer.model';

@Component({
  selector: 'app-root',
  template: `
    <h1>Beer me</h1>
    <beer-list [childBeerList]="masterBeerList"></beer-list>
    <new-beer (newBeerSender)="addBeer($event)"></new-beer>
    `
})

export class AppComponent {

  masterBeerList: Beer[] = [];

  addBeer(newBeerFromChild: Beer){
    this.masterBeerList.push(newBeerFromChild);
  }
}
