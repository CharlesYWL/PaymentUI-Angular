"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeModule = void 0;
var about_module_1 = require("./../about/about.module");
var base_module_1 = require("./../base/base.module");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var home_routing_module_1 = require("./home-routing.module");
var home_main_component_1 = require("./home-main/home-main.component");
var components_module_1 = require("../components/components.module");
var client_module_1 = require("./clients/client.module");
var company_module_1 = require("./company/company.module");
var shared_module_1 = require("./shared/shared.module");
var custom_meterial_module_1 = require("./custom-meterial.module");
var navigation_component_1 = require("./navigation/navigation.component");
var about_page_component_1 = require("./about/about-page/about-page.component");
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            declarations: [home_main_component_1.HomeMainComponent, navigation_component_1.NavigationComponent, about_page_component_1.AboutPageComponent],
            imports: [
                common_1.CommonModule,
                components_module_1.ComponentsModule,
                home_routing_module_1.HomeRoutingModule,
                base_module_1.BaseModule,
                company_module_1.CompanyModule,
                client_module_1.ClientModule,
                shared_module_1.SharedModule,
                custom_meterial_module_1.CustomMaterialModule,
                about_module_1.AboutModule,
            ]
        })
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;
