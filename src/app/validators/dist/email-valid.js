"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EmailValid = void 0;
var core_1 = require("@angular/core");
var regex = new RegExp('^.+\\@(\\[?)[a-zA-Z0-9\\-\\.]+\\.([a-zA-Z]{2,3}|[0-9]{1,3})(\\]?)$');
var EmailValid = /** @class */ (function () {
    function EmailValid() {
    }
    EmailValid.prototype.validate = function (control) {
        if (regex.test(control.value)) {
            return null;
        }
        else {
            return { email: false };
        }
    };
    EmailValid = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], EmailValid);
    return EmailValid;
}());
exports.EmailValid = EmailValid;
