"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var user_component_1 = require("./user/user.component");
var appRoutes = [
    { path: 'user', component: user_component_1.UserComponent },
    { path: '', component: user_component_1.UserComponent }
];
exports.routingX = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routings.js.map