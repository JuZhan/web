import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {AuthGuard} from "./core/security/auth-guard.service";

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    loadChildren: 'app/products/products.module#ProductsModule',
    canActivate: [AuthGuard],
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
