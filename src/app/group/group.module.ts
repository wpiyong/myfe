import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupRoutingModule } from './group-routing.module';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { GroupsComponent } from './groups.component';
import { BootstrapModule } from '../bootstrap/bootstrap.module';

@NgModule({
  imports: [
    CommonModule,
    GroupRoutingModule,
    BootstrapModule
  ],
  declarations: [GroupListComponent, GroupDetailComponent, GroupsComponent]
})
export class GroupModule { }
