import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { NotifyComponent } from './notify.component';
import { NotifyItemComponent } from './notify-item.component';
import { NotifyService } from './notify.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        NotifyComponent,
        NotifyItemComponent
    ],
    exports: [
        NotifyComponent,
        NotifyItemComponent
    ],
    providers: [NotifyService]
})
export class NotifyModule { }