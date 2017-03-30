import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { NotifyComponent } from './notify.component';
import { NotifyItemComponent } from './notify-item.component';
import { NotifyService } from './notify.service';

export { NotifyComponent } from './notify.component';
export { NotifyItemComponent } from './notify-item.component';
export { NotifyService } from './notify.service';

const COMPONENTS = [
    NotifyComponent,
    NotifyItemComponent
];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class NotifyModule {
    static forRoot(): ModuleWithProviders { return {ngModule: NotifyModule, providers: [NotifyService]}; }
}