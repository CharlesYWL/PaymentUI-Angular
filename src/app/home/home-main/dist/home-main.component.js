"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeMainComponent = void 0;
var core_1 = require("@angular/core");
var api_uti_service_1 = require("@services/api-uti.service");
var HomeMainComponent = /** @class */ (function () {
    function HomeMainComponent(api) {
        this.api = api;
        this.addToCart = new core_1.EventEmitter();
        this.itemList = [];
    }
    HomeMainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getGoods().subscribe(function (data) {
            _this.itemList = data.itemList;
        });
    };
    HomeMainComponent.prototype.onAddToCart = function (item) {
        this.addToCart.emit(item);
    };
    __decorate([
        core_1.Output()
    ], HomeMainComponent.prototype, "addToCart");
    HomeMainComponent = __decorate([
        core_1.Component({
            selector: 'app-home-main',
            templateUrl: './home-main.component.html',
            styleUrls: ['./home-main.component.sass'],
            providers: [api_uti_service_1.ApiUtiService]
        })
    ], HomeMainComponent);
    return HomeMainComponent;
}());
exports.HomeMainComponent = HomeMainComponent;
