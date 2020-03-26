import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { SharedModule } from "../shared/shared.module";
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [LoginComponent, SignUpComponent],
  imports: [CommonModule, SharedModule, AuthRoutingModule],
  exports: [LoginComponent, SignUpComponent]
})
export class AuthModule {}
