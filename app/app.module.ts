import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { BeerListComponent } from './beer-list.component';
import { NewBeerComponent } from './new-beer.component';
import { EditBeerComponent } from './edit-beer.component';
import { EmptinessPipe } from './emptiness.pipe';

@NgModule({
  imports: [ BrowserModule,
            FormsModule ],
  declarations: [ AppComponent,
                  BeerListComponent,
                NewBeerComponent,
                EditBeerComponent,
                EmptinessPipe],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
