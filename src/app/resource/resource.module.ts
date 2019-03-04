
import { NgModule } from '@angular/core';
import { ResourceRoutingModule, ResourceComponents } from './resource.routing.module';
@NgModule({
    declarations: [
        ResourceComponents
    ],
    imports: [
        ResourceRoutingModule
    ],
    providers: [],
    exports: []
})
export class ResourceModule { }
