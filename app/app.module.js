"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var welcome_component_1 = require("./home/welcome.component");
var product_component_1 = require("./products/product.component");
var contact_component_1 = require("./contact/contact.component");
var star_component_1 = require("./shared/star.component");
var user_component_1 = require("./user/user.component");
var user_detail_component_1 = require("./user/user-detail.component");
var user_repos_component_1 = require("./user/user-repos.component");
var app_routings_1 = require("./app.routings");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, app_routings_1.routingX, http_1.HttpModule, forms_1.FormsModule],
        declarations: [app_component_1.AppComponent, welcome_component_1.WelcomeComponent, product_component_1.ProductComponent, contact_component_1.ContactComponent, star_component_1.StarComponent, user_component_1.UserComponent, user_detail_component_1.UserDetailComponent, user_repos_component_1.UserRepoComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map