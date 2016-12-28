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
var RoundPipe = (function () {
    function RoundPipe() {
    }
    RoundPipe.prototype.transform = function (value, accuracy, keep) {
        if (accuracy === void 0) { accuracy = 1; }
        if (keep === void 0) { keep = false; }
        var fixed = value.toFixed(accuracy);
        return keep ? fixed : +fixed;
    };
    RoundPipe = __decorate([
        core_1.Pipe({
            name: 'round'
        }), 
        __metadata('design:paramtypes', [])
    ], RoundPipe);
    return RoundPipe;
}());
exports.RoundPipe = RoundPipe;
//# sourceMappingURL=round.pipe.js.map