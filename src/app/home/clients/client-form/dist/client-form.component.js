"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ClientFormComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ClientFormComponent = /** @class */ (function () {
    // in the template.
    function ClientFormComponent(emailVaild) {
        this.emailVaild = emailVaild;
        // new FormGroup is defined here
        this.clientForm = new forms_1.FormGroup({
            firstname: new forms_1.FormControl('', forms_1.Validators.required),
            lastname: new forms_1.FormControl('', forms_1.Validators.required),
            email: new forms_1.FormControl('', [forms_1.Validators.required, this.emailVaild.validate]),
            telephoneNumber: new forms_1.FormControl(''),
            companyName: new forms_1.FormControl('', forms_1.Validators.required)
        });
    }
    ClientFormComponent.prototype.ngOnInit = function () { };
    // event called when form is submitted, displaying the output of the form
    ClientFormComponent.prototype.saveClient = function () {
        console.log(this.clientForm);
    };
    ClientFormComponent = __decorate([
        core_1.Component({
            selector: 'app-client-form',
            templateUrl: './client-form.component.html',
            styleUrls: ['./client-form.component.sass']
        })
    ], ClientFormComponent);
    return ClientFormComponent;
}());
exports.ClientFormComponent = ClientFormComponent;
