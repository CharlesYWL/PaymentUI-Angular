"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ClientModule = void 0;
var components_module_1 = require("./../../components/components.module");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var client_page_component_1 = require("./client-page/client-page.component");
var client_form_component_1 = require("./client-form/client-form.component");
var forms_1 = require("@angular/forms");
var shared_module_1 = require("../shared/shared.module");
var custom_meterial_module_1 = require("../custom-meterial.module");
var ClientModule = /** @class */ (function () {
    function ClientModule() {
    }
    ClientModule = __decorate([
        core_1.NgModule({
            declarations: [client_page_component_1.ClientPageComponent, client_form_component_1.ClientFormComponent],
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                shared_module_1.SharedModule,
                components_module_1.ComponentsModule,
                custom_meterial_module_1.CustomMaterialModule,
            ]
        })
    ], ClientModule);
    return ClientModule;
}());
exports.ClientModule = ClientModule;
