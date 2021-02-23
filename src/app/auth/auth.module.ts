import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetComponent } from './reset/reset.component';
import {AuthRoutingModule} from '@auth/auth-routing.module';
import {SharedModule} from '@shared/shared.module';

const modules = [AuthRoutingModule,
  SharedModule];


@NgModule({
  declarations: [LoginComponent, RegisterComponent, ResetComponent],
  imports: [
    ...modules
  ]
})
export class AuthModule { }
