import {Component, OnInit} from "@angular/core";
import {ProductsService, Product} from "./products.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  host: {"class": "column"}
})
export class ProductsComponent implements OnInit {

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
  }


}



