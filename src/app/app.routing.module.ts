import { FormComponent } from './forms/form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';



export const rootRouterConfig: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'form', component: FormComponent },
    {
        path: 'demand',
        children: [
            { path: 'dashboard', component: DashboardComponent },
        ]
    },
    { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(rootRouterConfig)
    ],
    declarations: [

    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
