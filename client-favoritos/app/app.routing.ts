import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import { FavoritosListComponent }  from './components/favoritos-list.component';
import { FavoritoDetailsComponent }  from './components/favoritos-details.component';

const appRoutes: Routes = [
	{path: '',component: FavoritosListComponent},
	{path: 'marcador/:id', component: FavoritoDetailsComponent},
	{path: '**', component: FavoritosListComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
