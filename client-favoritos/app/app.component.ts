import {Component} from '@angular/core';
 
@Component({
    selector: 'my-app',
    templateUrl: 'app/views/home.html'
})
 
export class AppComponent {
	public titulo: string;
	public description: string;

	constructor(){
		this.titulo = 'APP FAVORITOS TITULO';
		this.description = 'Aplicación web SPA con Angular 2'
	}
 }
