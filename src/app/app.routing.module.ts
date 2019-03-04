import { FormComponent } from './forms/form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LoginLayoutComponent } from './Layouts/login-layout.component';
import { HomeLayoutComponent } from './Layouts/home-layout.component';
import { AuthGuard } from './services/auth.guard';



// export const rootRouterConfig: Routes = [
//     { path: '', redirectTo: 'login', pathMatch: 'full' },
//     { path: 'login', component: DashboardComponent },
//     { path: 'dashboard', component: DashboardComponent },
//     { path: 'form', component: FormComponent },
//     {
//         path: 'demand',
//         children: [
//             { path: 'dashboard', component: DashboardComponent },
//         ]
//     },
//     { path: '**', redirectTo: 'login', pathMatch: 'full' }
// ];

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
        path: 'form',
        component: FormComponent
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
