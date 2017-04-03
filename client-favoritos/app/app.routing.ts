import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import { FavoritosListComponent }  from './components/favoritos-list.component';
import { FavoritoDetailsComponent }  from './components/favoritos-details.component';
import { FavoritoAddComponent }  from './components/favorito-add.component';
import { FavoritoEditComponent }  from './components/favorito-edit.component';

const appRoutes: Routes = [
	{path: '',component: FavoritosListComponent},
	{path: 'marcador/:id', component: FavoritoDetailsComponent},
	{path: 'crear-marcador', component: FavoritoAddComponent},
	{path: 'editar-marcador/:id', component: FavoritoEditComponent},
	{path: '**', component: FavoritosListComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
