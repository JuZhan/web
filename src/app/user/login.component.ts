import {Component} from "@angular/core";
import {Router, NavigationExtras} from "@angular/router";
import {AuthService} from "../core/security/auth.service";

@Component({
  templateUrl: "login.component.html",
  host: {"class": "column"}
})
export class LoginComponent {
  message: string;

  name: string = 'john'
  password: string = 'password'

  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.passBase64 ? 'in' : 'out');
  }

  login(name: string, password: string) {
    this.message = 'Trying to log in ...';

    this.authService.login(name, password).subscribe((data: any) => {
      this.setMessage();
      if (this.authService.passBase64) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/products';

        // Set our navigation extras object
        // that passes on our global query params and fragment
        let navigationExtras: NavigationExtras = {
          preserveQueryParams: true,
          preserveFragment: true
        };

        // Redirect the user
        this.router.navigate([redirect], navigationExtras);
      } else {
        this.authService.logout()
        alert("login failed")
      }
    }, (error: any) => {
      this.authService.logout()
      if (error) {
        alert(error)
      } else {
        alert("login failed")
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }
}
