"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var HelperService = (function () {
    function HelperService() {
    }
    HelperService.prototype.orderBy = function (object, field) {
        var type = 'ASC';
        if (field[0] === '-') {
            field = field.substring(1);
            type = 'DESC';
        }
        object.sort(function (a, b) {
            if (type === 'ASC') {
                if (a[field] < b[field])
                    return -1;
                if (a[field] > b[field])
                    return 1;
                return 0;
            }
            else {
                if (a[field] < b[field])
                    return 1;
                if (a[field] > b[field])
                    return -1;
                return 0;
            }
        });
        return object;
    };
    HelperService.prototype.isBoolean = function (value) {
        return typeof value === 'boolean';
    };
    HelperService.prototype.isString = function (value) {
        return typeof value === 'string';
    };
    HelperService.prototype.isNumber = function (value) {
        return typeof value === 'number';
    };
    HelperService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], HelperService);
    return HelperService;
}());
exports.HelperService = HelperService;
//# sourceMappingURL=helper.service.js.map