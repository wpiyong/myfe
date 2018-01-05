import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { GroupsComponent } from './groups.component';

const routes: Routes = [
                            {
                                path: '',
                                component: GroupsComponent,
                                children: [
                                   { path: '', redirectTo: 'group-list', pathMatch: 'full' },
                                   { path: 'group-list', component: GroupListComponent },
                                   { path: 'group-list/:id', component: GroupDetailComponent }
                                ]
                            }
                        ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule { }
