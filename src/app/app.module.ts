import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {CoreModule} from "./core/core.module";
import {UserModule} from "./user/user.module";
import {routing} from "./app.routing";

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    UserModule,
    routing
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}


