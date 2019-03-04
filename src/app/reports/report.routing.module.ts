import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourceStatusComponent } from './resource-status.component/resource-status.component';
import { ResourceFullFillComponent } from './resource-fullfill.component/resource-fullfill.component';
import { DemandStatusComponent } from './demand-status.component/demand-status.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ResourceStatusComponent
      },
      {
        path: 'demand',
        component: DemandStatusComponent
      },
      {
        path: 'fullfill',
        component: ResourceFullFillComponent
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
export class ReportsRoutingModule { }

export const ReportsComponents = [ResourceFullFillComponent,DemandStatusComponent,ResourceStatusComponent];