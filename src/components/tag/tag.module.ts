import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TagComponent } from './tag.component';
import { TagItemComponent } from './tag-item.component';
import { TagSearchPipe } from './tag-search.pipe';

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: [
        TagComponent,
        TagItemComponent,
        TagSearchPipe
    ],
    exports: [
        TagComponent,
        TagItemComponent
    ]
})
export class TagModule { }