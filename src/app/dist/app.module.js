"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var components_module_1 = require("./components/components.module");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var post_component_1 = require("./post/post.component");
var double_pipe_1 = require("./double.pipe");
var class_directive_1 = require("./class.directive");
var loop_directive_1 = require("./loop.directive");
var app_routing_module_1 = require("./app-routing.module");
var pipetest_component_1 = require("./pipetest/pipetest.component");
var directive_test_component_1 = require("./directive-test/directive-test.component");
var reverse_phrase_component_1 = require("./reverse-phrase/reverse-phrase.component");
var page_not_found_component_1 = require("./page-not-found/page-not-found.component"); // Added here
var http_1 = require("@angular/common/http");
var fire_1 = require("@angular/fire");
var auth_1 = require("@angular/fire/auth");
var environment_1 = require("../environments/environment");
var animations_1 = require("@angular/platform-browser/animations");
var shared_module_1 = require("./shared/shared.module");
var cart_component_1 = require("./cart/cart.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                post_component_1.PostComponent,
                double_pipe_1.DoublePipe,
                class_directive_1.ClassDirective,
                loop_directive_1.LoopDirective,
                pipetest_component_1.PipetestComponent,
                directive_test_component_1.DirectiveTestComponent,
                reverse_phrase_component_1.ReversePhraseComponent,
                page_not_found_component_1.PageNotFoundComponent,
                cart_component_1.CartComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                components_module_1.ComponentsModule,
                fire_1.AngularFireModule.initializeApp(environment_1.environment.firebase),
                auth_1.AngularFireAuthModule,
                animations_1.BrowserAnimationsModule,
                shared_module_1.SharedModule,
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
