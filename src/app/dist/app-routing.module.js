"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var pipetest_component_1 = require("./pipetest/pipetest.component");
var directive_test_component_1 = require("./directive-test/directive-test.component");
var reverse_phrase_component_1 = require("./reverse-phrase/reverse-phrase.component");
var page_not_found_component_1 = require("./page-not-found/page-not-found.component");
var cart_component_1 = require("./cart/cart.component");
var order_component_1 = require("./order/order.component");
// const routes: Routes = [];
var routes = [
    {
        path: 'home',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./home/home.module'); }).then(function (m) { return m.HomeModule; }); }
    },
    {
        path: 'about',
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('./about/about.module'); }).then(function (m) { return m.AboutModule; });
        }
    },
    {
        path: 'contact',
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('./contact/contact.module'); }).then(function (m) { return m.ContactModule; });
        }
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'cocktails',
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('./cocktails/cocktails.module'); }).then(function (m) { return m.CocktailsModule; });
        }
    },
    {
        path: 'email-form',
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('./email-form/email-form.module'); }).then(function (m) { return m.EmailFormModule; });
        }
    },
    {
        path: 'auth',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./auth/auth.module'); }).then(function (m) { return m.AuthModule; }); }
    },
    { path: 'pipe', component: pipetest_component_1.PipetestComponent },
    { path: 'dt', component: directive_test_component_1.DirectiveTestComponent },
    { path: 'rp', component: reverse_phrase_component_1.ReversePhraseComponent },
    { path: 'cart', component: cart_component_1.CartComponent },
    { path: 'order', component: order_component_1.OrderComponent },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            declarations: [],
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
