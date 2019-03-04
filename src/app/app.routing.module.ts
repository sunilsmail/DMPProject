import { FormComponent } from './forms/form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LoginLayoutComponent } from './Layouts/login-layout.component';
import { HomeLayoutComponent } from './Layouts/home-layout.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: "dashboard",
        pathMatch: "full"
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'admin',
        component: FormComponent
      },
      {
        path: 'demand',
        loadChildren: './demand/demand.module#DemandModule'
      },
      {
        path: 'resource',
        loadChildren: './resource/resource.module#ResourceModule'
      },
      {
        path: 'reports',
        loadChildren: './reports/report.module#ReportsModule'
      }
    ]
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
  { path: '**', redirectTo: 'login' }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
