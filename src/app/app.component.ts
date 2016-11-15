import {Component} from "@angular/core";
import "./rxjs-operators";
import {Router} from "@angular/router";
import {AuthService} from "./core/security/auth.service";

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(private authService: AuthService,
              public router: Router) {
  }

  public logout() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }
}
