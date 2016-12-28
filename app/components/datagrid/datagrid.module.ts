import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

import { DatagridComponent } from './datagrid.component';
import { DatagridFilterComponent } from './datagrid-filter.component';
import { DatagridSortComponent } from './datagrid-sort.component';
import { ButtonsModule } from '../buttons/buttons.module';
import { DropdownModule } from '../dropdown/dropdown.module';
import { PopoverModule } from '../popover/popover.module';
import { TooltipModule } from '../tooltip/tooltip.module';
import { SelectModule } from '../select/select.module';
import { InputModule } from '../input/input.module';
import { CheckboxModule } from '../checkbox/checkbox.module';
import { SpinnerModule } from '../spinner/spinner.module';
import { DatepickerModule } from '../datepicker/datepicker.module';
import { SwitcherModule } from '../switcher/switcher.module';
import { PaginationModule } from '../pagination/pagination.module';
import { PipesModule } from '../../shared/pipes/pipes.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ButtonsModule,
        DropdownModule,
        PopoverModule,
        TooltipModule,
        SelectModule,
        PaginationModule,
        CheckboxModule,
        SpinnerModule,
        DatepickerModule,
        SwitcherModule,
        InputModule,
        PipesModule
    ],
    declarations: [
        DatagridComponent,
        DatagridFilterComponent,
        DatagridSortComponent
    ],
    exports: [
        DatagridComponent,
        DatagridFilterComponent,
        DatagridSortComponent
    ]
})
export class DatagridModule { }