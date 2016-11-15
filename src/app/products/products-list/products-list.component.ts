import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Product, ProductsService} from "../products.service";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Observable<Product[]>;
  constructor(private productsService : ProductsService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts()
  }
}
