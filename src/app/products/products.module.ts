import {NgModule} from "@angular/core";
import {ProductsComponent} from "./products.component";
import {ProductsService} from "./products.service";
import {SharedModule} from "../shared/shared.module";
import {routing} from "./products.routing";
import { ProductsListComponent } from './products-list/products-list.component';

@NgModule({
  imports: [
    SharedModule,
    routing
  ],
  declarations: [ProductsComponent, ProductsListComponent],
  providers: [
    ProductsService
  ]
})
export class ProductsModule {
}
