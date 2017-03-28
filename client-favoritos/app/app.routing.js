"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var favoritos_list_component_1 = require("./components/favoritos-list.component");
var favoritos_details_component_1 = require("./components/favoritos-details.component");
var appRoutes = [
    { path: '', component: favoritos_list_component_1.FavoritosListComponent },
    { path: 'marcador/:id', component: favoritos_details_component_1.FavoritoDetailsComponent },
    { path: '**', component: favoritos_list_component_1.FavoritosListComponent },
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map