import { Pipe, PipeTransform } from '@angular/core'
import { TagItem } from './tag.model';

@Pipe({
    name: 'tagSearchFilter'
})
export class TagSearchPipe {
    transform(items: Array<TagItem>, args: string): Array<TagItem> {
        return items.filter((item: TagItem) => item.label.toLowerCase().indexOf((args || '').toLowerCase()) > -1);
    }
}