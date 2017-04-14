import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {FavoritoService} from '../services/favorito.service';
import {Favorito} from '../models/favorito';

@Component({
		selector: 'favoritos-list',
		templateUrl: 'app/views/favoritos-list.html',
		providers: [FavoritoService]
})

export class FavoritosListComponent implements OnInit{
	public title: string;
	public loading: boolean;

	public favoritos: Favorito[];
	public errorMessage;

	public confirmado;

	constructor(
			private _favoritoService: FavoritoService
		){
		this.title = 'Listado de marcadores';
		this.loading = true;
	}

	ngOnInit(){
		console.log('FavoritosListComponent cargado!!');
		this.getFavoritos()
	}

	onDeleteConfirm(id){
		this.confirmado = id;
	}

	onCancelConfirm(id){
		this.confirmado = null;
	}

	onDeleteFavorito(id){
		this._favoritoService.deleteFavorito(id).subscribe(
					result => {
						if(!result.message){
							alert('Error en el servidor')
						} else {
							this.getFavoritos()
						}
					},
					error => {
						this.errorMessage = <any>error;
						if(this.errorMessage != null){
							console.log(this.errorMessage);
							alert('Error en la petición');
						}
					}

			);
	}

	getFavoritos(){
		this._favoritoService.getFavoritos().subscribe(
					result => {
						console.log(result);
						this.favoritos = result.favoritos;

						if(!this.favoritos){
							alert('Error en el servidor')
						} else {
							this.loading = false;
						}
					},
					error => {
						this.errorMessage = <any>error;
						if(this.errorMessage != null){
							console.log(this.errorMessage);
							alert('Error en la petición');
						}
					}
			);
	}
			
}