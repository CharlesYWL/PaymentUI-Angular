"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CartService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var lodash_1 = require("lodash");
var CartService = /** @class */ (function () {
    function CartService() {
        var _this = this;
        this.cart = new rxjs_1.BehaviorSubject({});
        this.currentCart = this.cart.asObservable();
        this.addToCart = function (item) {
            var newCart = lodash_1.cloneDeep(_this.cart.value);
            if (!(item in newCart)) {
                newCart[item] = 0;
            }
            newCart[item] += 1;
            _this.cart.next(newCart);
        };
        this.removeFromCart = function (item) {
            var newCart = lodash_1.cloneDeep(_this.cart.value);
            if (item in newCart) {
                newCart[item] -= 1;
            }
            if (newCart[item] === 0) {
                delete newCart[item];
            }
            _this.cart.next(newCart);
        };
        this.cartNumber = function () {
            if (typeof _this.cart.value === 'object' &&
                _this.cart.value !== null &&
                Object.keys(_this.cart.value).length !== 0) {
                return Object.keys(_this.cart.value).reduce(function (sum, key) { return sum + _this.cart.value[key] || 0; }, 0);
            }
            return '';
        };
    }
    CartService.prototype.logCart = function () {
        console.log('CART:', this.cart);
    };
    CartService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CartService);
    return CartService;
}());
exports.CartService = CartService;
