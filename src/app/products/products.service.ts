import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {AuthService} from "../core/security/auth.service";


export class Product{
  constructor(public id: number, public name: string){}
  public status:string
  public description:string
  "imageSrc": string
  price: number
  category: string
  effectiveDate: Date
  endDate: Date
  createdDate: Date
  lastModifiedDate: Date
}

@Injectable()
export class ProductsService {
  private productsUrl = "http://localhost:8082/uaa/api/products"


  constructor (private http: Http, private authService: AuthService) {}

  getProducts (): Observable<Product[]> {

    let headers = new Headers({ 'Content-Type': 'application/json',
      'Authorization': 'Basic ' + this.authService.passBase64});

    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.productsUrl, options)
      .map(this.extractData)
      .catch(this.handleError);

  }

  private extractData = (res: Response) => {
    let body = res.json();
    return (body._embedded || {}).products || { }
  }

  private handleError = (error: any) => {
    let errorBody = error.json();

    let errMsg = (errorBody.message) ? errorBody.message :
      errorBody.status ? `${errorBody.status} - ${errorBody.statusText}` : 'Server error'
    console.error(errMsg) // log to console instead
    return Observable.throw(errMsg)
  }
}

