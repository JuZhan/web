import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import "rxjs/add/operator/do";
import "rxjs/add/operator/delay";

@Injectable()
export class AuthService {

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  get passBase64() {
    return localStorage.getItem("auth.passBase64")
  }

  set passBase64(pass: string) {
    if (pass) {
      localStorage.setItem("auth.passBase64", pass)
    } else {
      localStorage.removeItem("auth.passBase64")
    }
  }

  login(user: string, password: string): Observable<boolean> {
    this.passBase64 = btoa(user + ":" + password)
    return this.checkAuth()
  }

  logout(): void {
    this.passBase64 = null
    localStorage.removeItem("auth.passBase64")
  }

  private apiUrl = "http://localhost:8082/uaa/api"


  constructor(private http: Http) {
  }

  checkAuth(): Observable<any> {

    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + this.passBase64
    });
    let options = new RequestOptions({headers: headers});

    return this.http.get(this.apiUrl, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData = (res: Response) => {
    let body = res.json();
    return body || {}
  }

  private handleError = (error: any) => {
    this.passBase64 = null;
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errorBody = error.json();

    let errMsg = (errorBody.message) ? errorBody.message :
      errorBody.status ? `${errorBody.status} - ${errorBody.statusText}` : 'Server error'
    errMsg = JSON.stringify(errorBody);
    console.error(errMsg) // log to console instead
    return Observable.throw(errMsg)
  }


}

