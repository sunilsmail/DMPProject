import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllocateResourceComponent } from './allocate-resource.component/allocate-resource.component';
import { AddResourceComponent } from './add-resource.component/add-resource.component';
import { TrackResourceComponent } from './track-resource.component/track-resource.component';
import { ViewResourceComponent } from './view-resource.component/view-resource.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AddResourceComponent
      },
      {
        path: 'allocate',
        component: AllocateResourceComponent
      },
      {
        path: 'track',
        component: TrackResourceComponent
      },
      {
        path: 'view',
        component: ViewResourceComponent
      }
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class ResourceRoutingModule { }

export const ResourceComponents = [AddResourceComponent,AllocateResourceComponent,TrackResourceComponent,ViewResourceComponent];