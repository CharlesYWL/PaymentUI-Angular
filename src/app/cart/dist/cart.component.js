"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.CartComponent = void 0;
var core_1 = require("@angular/core");
var lodash_1 = require("lodash");
var CartComponent = /** @class */ (function () {
    function CartComponent(cartService, helper, api) {
        this.cartService = cartService;
        this.helper = helper;
        this.api = api;
        this.cartDetails = [];
        this.cart = {};
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.cartService.currentCart.subscribe(function (cart) {
            console.log('cart change', cart);
            _this.cart = cart;
            if (_this.isItemChanged(cart, _this.cartDetails)) {
                _this.fetchItems(cart).then(function (result) {
                    _this.cartDetails = result;
                    console.log('API fetch:', result);
                });
            }
            else {
                // only change quanity
                _this.cartDetails.forEach(function (x) {
                    x.quantity = cart[x.name];
                    console.log('only change quantity');
                });
            }
        });
    };
    CartComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    CartComponent.prototype.totalPrice = function () {
        return this.cartDetails
            .map(function (x) { return x.quantity * x.data.unit_amount; })
            .reduce(function (sum, curr) { return sum + curr; }, 0);
    };
    CartComponent.prototype.fetchItems = function (cart) {
        var _this = this;
        var promiseArray = [];
        var results = [];
        var _loop_1 = function (id) {
            promiseArray.push(new Promise(function (resolve, reject) {
                _this.api.getGood(id).subscribe(function (res) {
                    return resolve(res);
                }, function (err) {
                    reject(err);
                });
            }));
        };
        for (var _i = 0, _a = Object.keys(cart); _i < _a.length; _i++) {
            var id = _a[_i];
            _loop_1(id);
        }
        return Promise.all(promiseArray)
            .then(function (res) {
            res.forEach(function (item) {
                results.push(__assign(__assign({}, item), { quantity: cart[item.name] }));
            });
            return results;
        })["catch"](function (err) {
            console.log(err);
            return [];
        });
    };
    CartComponent.prototype.isItemChanged = function (newV, cartDetails) {
        // newV:{sampletest0:1}
        // cardDetails:[{name:samepletest0,data:{},quanity:1}]
        var oldV = {};
        cartDetails.forEach(function (x) {
            oldV[x.name] = x.quantity;
        });
        return !lodash_1.isEqual(Object.keys(oldV), Object.keys(newV));
    };
    CartComponent.prototype.handleClick = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.api.checkout(this.cartDetails);
                return [2 /*return*/];
            });
        });
    };
    CartComponent = __decorate([
        core_1.Component({
            selector: 'app-cart',
            templateUrl: './cart.component.html',
            styleUrls: ['./cart.component.sass']
        })
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;
