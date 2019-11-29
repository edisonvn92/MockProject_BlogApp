import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared-component/shared.module';
import { UserModifyService } from 'src/app/services/users/user-modify.service';


@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    SignupRoutingModule
  ],
  providers: [UserModifyService]
})
export class SignupModule { }
