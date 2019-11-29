import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { SharedModule } from '../../shared-component/shared.module';
import { ArticlesListService } from '../../services/articles/articles-list.service';
import { ProfileService } from 'src/app/services/profile/profile.service';


@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProfileRoutingModule
  ],
  providers: [ProfileService, ArticlesListService]
})
export class ProfileModule { }
