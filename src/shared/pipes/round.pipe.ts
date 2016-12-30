import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'round'
})
export class RoundPipe implements PipeTransform {
    constructor(){}

    transform(value: number, accuracy: number = 1, keep: boolean = false) {
        var fixed = value.toFixed(accuracy);

        return keep ? fixed : +fixed;
    }
}
