import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TagComponent } from './tag.component';
import { TagItemComponent } from './tag-item.component';
import { TagSearchPipe } from './tag-search.pipe';

export { TagComponent } from './tag.component';
export { TagItemComponent } from './tag-item.component';
export { TagSearchPipe } from './tag-search.pipe';

const COMPONENTS = [
    TagComponent,
    TagItemComponent,
    TagSearchPipe
];

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class TagModule {
    static forRoot(): ModuleWithProviders { return {ngModule: TagModule, providers: []}; }
}