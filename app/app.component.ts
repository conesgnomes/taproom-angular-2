import { Component } from '@angular/core';
import { Beer } from './beer.model';

@Component({
  selector: 'app-root',
  template: `
    <h1>Beer me</h1>
    <beer-list [childBeerList]="masterBeerList" (clickSender)="editBeer($event)" (soldPintsSender)="soldPints($event)"></beer-list>
    <edit-beer [childSelectedBeer]="selectedBeer" (doneButtonClickedSender)="finishedEditing()"></edit-beer>
    <new-beer (newBeerSender)="addBeer($event)"></new-beer>
    `
})

export class AppComponent {

  masterBeerList: Beer[] = [];
  selectedBeer = null;
  pints = this.pints;

  finishedEditing() {
    this.selectedBeer = null;
  }

  editBeer(clickedBeer) {
    this.selectedBeer = clickedBeer;
  }

  addBeer(newBeerFromChild: Beer) {
    this.masterBeerList.push(newBeerFromChild);
  }

}
