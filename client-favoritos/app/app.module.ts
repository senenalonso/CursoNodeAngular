import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { FavoritosListComponent }  from './components/favoritos-list.component';


 
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
  						AppComponent,
  						FavoritosListComponent
  						 ],
  bootstrap:    [ AppComponent ]
})
 
export class AppModule { }
