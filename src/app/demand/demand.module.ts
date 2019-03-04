
import { NgModule } from '@angular/core';
import { DemandRoutingModule, DemandComponents } from './demand.routing.module';
import {TabViewModule} from 'primeng/tabview';
@NgModule({
    declarations: [
        DemandComponents
    ],
    imports: [
        DemandRoutingModule,
        TabViewModule
    ],
    providers: [],
    exports: []
})
export class DemandModule { }
