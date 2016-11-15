import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

@NgModule({
  imports: [],
  declarations: [],
  exports: [CommonModule, FormsModule, HttpModule] // it is allow to exports module which not import
})
export class SharedModule {
}
