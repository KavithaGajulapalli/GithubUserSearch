"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("./user.service");
var UserComponent = (function () {
    function UserComponent(_userService) {
        this._userService = _userService;
    }
    UserComponent.prototype.search = function () {
        var _this = this;
        console.log(this.userName);
        this._userService.getUserDetail(this.userName)
            .subscribe(function (user) { return _this.user = user; }, function (error) { return _this.errorMessage = error; });
        console.log(this.user);
    };
    UserComponent.prototype.showRepositories = function (loginId) {
        var _this = this;
        this._userService.getUserRepos(loginId)
            .subscribe(function (repositories) { return _this.repos = repositories; }, function (error) { return _this.errorMessage = error; });
        console.log(this.repos);
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/user/user.component.html',
        styleUrls: ['app/user/user.style.css'],
        providers: [user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map