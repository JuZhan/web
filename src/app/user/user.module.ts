import {NgModule} from "@angular/core";
import {LoginComponent} from "./login.component";
import {SharedModule} from "../shared/shared.module";
import {routing} from "./login.routing";
@NgModule({
  imports: [
    SharedModule,
    routing
  ],
  declarations: [LoginComponent],
  providers: [],
  exports: []
})

export class UserModule {
}
