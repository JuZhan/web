import {NgModule, ModuleWithProviders, Optional, SkipSelf} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CoreComponent} from "./core.component";
import {AuthGuard} from "./security/auth-guard.service";
import {AuthService} from "./security/auth.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CoreComponent],
  providers: [AuthService, AuthGuard]
})


export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

}
