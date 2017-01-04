define('app',["require", "exports"], function (require, exports) {
    "use strict";
    var App = (function () {
        function App() {
            this.message = 'Hello World!';
        }
        return App;
    }());
    exports.App = App;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Promise.config({
        longStackTraces: environment_1.default.debug,
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .plugin("aurelia-animator-velocity")
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    function configure(config) {
    }
    exports.configure = configure;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/hub',["require", "exports", "aurelia-framework", "aurelia-animator-velocity"], function (require, exports, aurelia_framework_1, aurelia_animator_velocity_1) {
    "use strict";
    var Hub = (function () {
        function Hub(velocity) {
            this.velocity = velocity;
        }
        Hub.prototype.attached = function () {
            console.log(this.container);
            this.velocity.runSequence([
                { e: this.container, p: { translateX: 100 }, o: { duration: 1000 } },
                { e: this.container, p: { translateX: 200 }, o: { duration: 1000 } },
                { e: this.container, p: { translateX: 300 }, o: { duration: 1000 } }
            ]);
        };
        Hub.prototype.valueChanged = function (newValue, oldValue) {
        };
        return Hub;
    }());
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], Hub.prototype, "value", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", HTMLElement)
    ], Hub.prototype, "container", void 0);
    Hub = __decorate([
        aurelia_framework_1.autoinject(),
        __metadata("design:paramtypes", [aurelia_animator_velocity_1.VelocityAnimator])
    ], Hub);
    exports.Hub = Hub;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/allen',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    var Allen = (function () {
        function Allen() {
        }
        Allen.prototype.valueChanged = function (newValue, oldValue) {
        };
        return Allen;
    }());
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], Allen.prototype, "value", void 0);
    exports.Allen = Allen;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\r\n  <require from=\"./app.css\"></require>\r\n  <require from=\"./resources/elements/hub\"></require>\r\n  <h1>${message}</h1>\r\n\r\n  <hub></hub>\r\n</template>\r\n"; });
define('text!app.css', ['module'], function(module) { module.exports = "body {\n  background: -webkit-linear-gradient(#303030, #444444 45%, #444444 55%, #303030);\n  background: -o-linear-gradient(#303030, #444444 45%, #444444 55%, #303030);\n  background: linear-gradient(#303030, #444444 45%, #444444 55%, #303030);\n  background-repeat: no-repeat;\n  background-attachment: fixed; }\n\nh1 {\n  color: blue; }\n"; });
define('text!resources/elements/hub.html', ['module'], function(module) { module.exports = "<template><require from=\"./hub.css\"></require><div class=\"container\" ref=\"container\"><div class=\"left-curtain\"></div><div class=\"right-curtain\"></div><div class=\"left-triangle\"></div><div class=\"right-triangle\"></div></div></template>"; });
define('text!resources/colors.css', ['module'], function(module) { module.exports = ""; });
define('text!resources/elements/hub.css', ['module'], function(module) { module.exports = ".container {\n  height: 400px;\n  width: 600px;\n  background: radial-gradient(#00597f, #00354c);\n  border: 1px solid #007cb2;\n  position: absolute;\n  color: white; }\n  .container .left-triangle, .container .right-triangle, .container .left-curtain, .container .right-curtain {\n    position: absolute; }\n  .container .left-triangle, .container .left-curtain {\n    left: 0;\n    bottom: 0; }\n  .container .right-triangle, .container .right-curtain {\n    top: 0;\n    right: 0; }\n  .container .left-triangle {\n    width: 300px;\n    height: 300px;\n    shape-outside: polygon(0 0, 100% 100%, 0 100%);\n    clip-path: polygon(0 0, 100% 100%, 0 100%);\n    background: linear-gradient(45deg, #001119, #00597f 49%, #007cb2 50%);\n    margin-top: 100px; }\n  .container .right-triangle {\n    width: 300px;\n    height: 300px;\n    shape-outside: polygon(0 0, 100% 0, 100% 100%);\n    clip-path: polygon(0 0, 100% 0, 100% 100%);\n    background: linear-gradient(45deg, #007cb2 50%, #00597f 51%, #001119 100%); }\n  .container .left-curtain {\n    width: 500px;\n    height: 400px;\n    background-color: red;\n    clip-path: polygon(0 0, 100px 0, 100% 100%, 0 100%);\n    background: linear-gradient(45deg, #001119, #007cb2 50%); }\n  .container .right-curtain {\n    width: 500px;\n    height: 400px;\n    background-color: white;\n    clip-path: polygon(0 0, 100% 0, 100% 100%, 400px 100%);\n    background: linear-gradient(45deg, #007cb2 50%, #001119 100%); }\n"; });
define('text!resources/elements/allen.html', ['module'], function(module) { module.exports = "<template>\n  <h1>${value}</h1>\n</template>"; });
//# sourceMappingURL=app-bundle.js.map