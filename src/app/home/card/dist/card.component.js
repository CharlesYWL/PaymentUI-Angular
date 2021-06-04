"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CardComponent = void 0;
var core_1 = require("@angular/core");
var helper_service_1 = require("@services/helper.service");
var CardComponent = /** @class */ (function () {
    function CardComponent(helper, router, activatedRoute, cartService) {
        this.helper = helper;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.cartService = cartService;
        this.item = undefined;
    }
    CardComponent.prototype.ngOnInit = function () { };
    CardComponent.prototype.navigateTo = function (itemId) {
        this.router.navigate(['./items/' + itemId], {
            relativeTo: this.activatedRoute
        });
    };
    __decorate([
        core_1.Input()
    ], CardComponent.prototype, "item");
    CardComponent = __decorate([
        core_1.Component({
            selector: 'app-card',
            templateUrl: './card.component.html',
            styleUrls: ['./card.component.sass'],
            providers: [helper_service_1.HelperService]
        })
    ], CardComponent);
    return CardComponent;
}());
exports.CardComponent = CardComponent;
