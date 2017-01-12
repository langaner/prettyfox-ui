import { Injectable } from '@angular/core';

@Injectable()
export class HelperService {
    orderBy(object: Array<Object>, field: string): Array<Object> {
        var type = 'ASC';

        if (field[0] === '-') {
            field = field.substring(1);
            type = 'DESC';
        }

        object.sort(function(a, b) {
            if (type === 'ASC') {
                if (a[field] < b[field]) return -1;
                if (a[field] > b[field]) return 1;
                return 0;
            } else {
                if (a[field] < b[field]) return 1;
                if (a[field] > b[field]) return -1;
                return 0;
            }
        });

        return object;
    }

    isBoolean(value: any): boolean {
        return typeof value === 'boolean';
    }

    isString(value: any): boolean {
        return typeof value === 'string'; 
    }

    isNumber(value: any): boolean {
        return typeof value === 'number'; 
    }

    isArray(value: any): boolean {
        return Array.isArray(value); 
    }
}