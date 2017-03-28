import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }	from '@angular/forms';
import { HttpModule, JsonpModule }	from '@angular/http';

import { routing, appRoutingProviders }  from './app.routing';


import { AppComponent }  from './app.component';
import { FavoritosListComponent }  from './components/favoritos-list.component';
import { FavoritoDetailsComponent }  from './components/favoritos-details.component';

 
@NgModule({
  imports:      [ BrowserModule, 
  								FormsModule,
  								HttpModule,
  								routing 
  							],
  declarations: [ 
  						AppComponent,
  						FavoritosListComponent,
  						FavoritoDetailsComponent
  						 ],
 	providers: [ appRoutingProviders ],
  bootstrap:    [ AppComponent ]
})
 
export class AppModule { }
