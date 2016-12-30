import { ValidatorFn, AbstractControl } from '@angular/forms';

export class ValidateService {
    /**
     * Email validation
     * 
     * @static
     * @returns
     * 
     * @memberOf ValidateService
     */
	static email() {
        return (control: AbstractControl): {[key: string]: any} => {
            let match = control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)
            
            return match ? null : { 'email': true };
        };
    }
    
    /**
     * Password validation
     * 
     * @static
     * @param {number} [min=6]
     * @param {number} [max=100]
     * @returns
     * 
     * @memberOf ValidateService
     */
    static password(min: number = 6, max: number = 100) {
        return (control: AbstractControl): {[key: string]: any} => {
            let match = control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/);

            return match ? null : { 
                'password': { 
                    'value': control.value 
                } 
            };
        };
    }

    /**
     * Integer validation
     * 
     * @static
     * @returns {ValidatorFn}
     * 
     * @memberOf ValidateService
     */
    static int(): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
            let match = /^-?\d+$/.test(control.value);

            return match ? null : { 
                'int': { 
                    'value': control.value 
                } 
            };
        };
    }

    /**
     * Number validation
     * 
     * @static
     * @returns {ValidatorFn}
     * 
     * @memberOf ValidateService
     */
    static number(): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
            let match = /^-{0,1}\d*\.{0,1}\d+$/.test(control.value);

            return match ? null : { 
                'number': { 
                    'value': control.value 
                } 
            };
        };
    }

    /**
     * Date validation
     * 
     * @static
     * @returns {ValidatorFn}
     * 
     * @memberOf ValidateService
     */
    static date(): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
            let match = !/Invalid|NaN/.test(new Date(control.value).toString());

            return match ? null : { 
                'date': { 
                    'value': new Date(control.value).toString()
                } 
            };
        };
    }

    /**
     * Min date validation
     * 
     * @static
     * @param {*} date
     * @returns {ValidatorFn}
     * 
     * @memberOf ValidateService
     */
    static minDate(date: any): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
            let currentDate: Date = new Date(control.value);

            if(!/Invalid|NaN/.test(currentDate.toString())) {
                return null;
            }

            let match = !/Invalid|NaN/.test(new Date(control.value).toString()) && currentDate >= new Date(date);

            return match ? null : { 
                'minDate': { 
                    'value': new Date(control.value).toString(),
                    'date': new Date(date).toString()
                } 
            };
        };
    }

    /**
     * Max date validation
     * 
     * @static
     * @param {*} date
     * @returns {ValidatorFn}
     * 
     * @memberOf ValidateService
     */
    static maxDate(date: any): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
            let currentDate: Date = new Date(control.value);

            if(!/Invalid|NaN/.test(currentDate.toString())) {
                return null;
            }

            let match = !/Invalid|NaN/.test(new Date(control.value).toString()) && currentDate <= new Date(date);

            return match ? null : { 
                'maxDate': { 
                    'value': new Date(control.value).toString(),
                    'date': new Date(date).toString()
                } 
            };
        };
    }

    /**
     * Value equeal validation
     * 
     * @static
     * @param {*} value
     * @returns {ValidatorFn}
     * 
     * @memberOf ValidateService
     */
    static equal(value: any): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
            let match = control.value == value;

            return match ? null : { 
                'equal': { 
                    'value': control.value,
                    'equal': value
                } 
            };
        };
    }

    /**
     * Max value validation
     * 
     * @static
     * @param {number} max
     * @returns {ValidatorFn}
     * 
     * @memberOf ValidateService
     */
    static max(max: number): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
            let match = control.value <= max;

            return match ? null : { 
                'max': { 
                    'value': control.value,
                    'max': max
                } 
            };
        };
    }

    /**
     * Min value validation
     * 
     * @static
     * @param {number} min
     * @returns {ValidatorFn}
     * 
     * @memberOf ValidateService
     */
    static min(min: number): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
            let match = control.value >= min;

            return match ? null : { 
                'min': { 
                    'value': control.value,
                    'min': min
                } 
            };
        };
    }

    /**
     * Value range validation
     * 
     * @static
     * @param {Array<number>} range
     * @returns {ValidatorFn}
     * 
     * @memberOf ValidateService
     */
    static range(range: Array<number>): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
            let match = control.value >= range[0] && control.value <= range[1];

            return match ? null : { 
                'equal': { 
                    'value': control.value,
                    'min': range[0],
                    'max': range[1]
                } 
            };
        };
    }

    /**
     * Json validate
     * 
     * @static
     * @returns {ValidatorFn}
     * 
     * @memberOf ValidateService
     */
    static json(): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
            let match = JSON.parse(control.value);

            return (!match || typeof match !== 'object') ? null : { 'json': { 
                    'value': JSON.parse(control.value) 
                }
            };
        };
    }

    /**
     * Boolean validate
     * 
     * @static
     * @returns {ValidatorFn}
     * 
     * @memberOf ValidateService
     */
    static boolean(): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
            let match = (['true', 'false', '1', '0'].indexOf(control.value) < 0);

            return match ? null : { 
                'boolean': { 
                    'value': control.value 
                } 
            };
        };
    }

    /**
     * Hex color validate
     * 
     * @static
     * @returns {ValidatorFn}
     * 
     * @memberOf ValidateService
     */
    static hex(): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
            let match = /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i.test(control.value);

            return match ? null : { 
                'hex': { 
                    'value': control.value 
                } 
            };
        };
    }

    /**
     * Rgb color validate
     * 
     * @static
     * @returns {ValidatorFn}
     * 
     * @memberOf ValidateService
     */
    static rgb(): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
            let match = /(^rgb\((\d+),\s*(\d+),\s*(\d+)\)$)|(^rgba\((\d+),\s*(\d+),\s*(\d+)(,\s*\d+\.\d+)*\)$)/.test(control.value);

            return match ? null : { 
                'rgb': { 
                    'value': control.value 
                } 
            };
        };
    }
}