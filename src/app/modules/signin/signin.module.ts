import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared-component/shared.module';


@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    SigninRoutingModule
  ]
})
export class SigninModule { }
