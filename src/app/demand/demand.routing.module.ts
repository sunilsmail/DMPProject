import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDemandComponent } from './add-demand.component/add-demand.component';
import { ViewDemandComponent } from './view-demand.component/view-demand.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AddDemandComponent
      },
      {
        path: 'view',
        component: ViewDemandComponent
      }
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [

  ],
  exports: [RouterModule]
})
export class DemandRoutingModule { }

export const DemandComponents = [AddDemandComponent,ViewDemandComponent];