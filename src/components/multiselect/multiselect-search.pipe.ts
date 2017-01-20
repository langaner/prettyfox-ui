import { Pipe, PipeTransform } from '@angular/core'
import { MultiselectOption } from './multiselect.model';

@Pipe({
    name: 'multiselectSearchFilter'
})
export class MultiselectSearchPipe {
    transform(options: Array<MultiselectOption>, args: string): Array<MultiselectOption> {
        return options.filter((option: MultiselectOption) => option.label.toLowerCase().indexOf((args || '').toLowerCase()) > -1);
    }
}