import {Component} from '@angular/core';

@Component({
		selector: 'favoritos-list',
		templateUrl: 'app/views/favoritos-list.html'
})

export class FavoritosListComponent {
	public title: string;
	public color: string;
	public favoritos: Array<string>;
	public favoritosVisibles: boolean;

	constructor(){
		this.title = 'Listado de marcadores';
		this.color = 'red';
		this.favoritos = ["bbva.es","marca.es","gmail.com","google.com"];
		this.favoritosVisibles = false;
	}

		toogleFavoritos(){
			this.favoritosVisibles = !this.favoritosVisibles;
		}

		changeColor(){
			console.log(this.color);
		}
			
}