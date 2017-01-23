import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'multiselectSearchFilter'
})
export class MultiselectSearchPipe {
    transform(options: Array<any>, search: string, name: string): Array<any> {
        return options.filter((option: any) => option[name].toLowerCase().indexOf((search || '').toLowerCase()) > -1);
    }
}