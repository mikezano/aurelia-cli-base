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
    var Hub = Hub_1 = (function () {
        function Hub(velocity) {
            this.toggleCurtain = false;
            this.velocity = velocity;
        }
        Hub.prototype.initialState = function () {
            this.containerContent.style.height = '10px';
            this.leftCorner.style.transform = "translateX(-300px)";
            this.rightCorner.style.transform = "translateX(300px)";
        };
        Hub.prototype.attached = function () {
            this.initialState();
            this.runSequence();
        };
        Hub.prototype.runSequence = function () {
            this.velocity.runSequence([
                { e: this.leftCorner, p: { translateX: -300 }, o: { duration: 0 } },
                { e: this.rightCorner, p: { translateX: 300 }, o: { duration: 0, sequenceQueue: false } },
                { e: this.containerContent, p: { height: 400 }, o: { duration: Hub_1.duration / 2.5, easing: Hub_1.easeOut } },
                { e: this.leftCorner, p: { translateX: 0 }, o: { duration: Hub_1.duration / 2.5, easing: Hub_1.easeOut } },
                { e: this.rightCorner, p: { translateX: 0 }, o: { duration: Hub_1.duration / 2.5, easing: Hub_1.easeOut, sequenceQueue: false } },
                { e: this.leftCurtain, p: { translateX: -500 }, o: { duration: Hub_1.duration * 2, easing: Hub_1.easeOut } },
                { e: this.rightCurtain, p: { translateX: 500 }, o: { duration: Hub_1.duration * 2, easing: Hub_1.easeOut, sequenceQueue: false } }
            ]);
        };
        Hub.prototype.curtainAnimate = function () {
            this.toggleCurtain = !this.toggleCurtain;
            this.velocity.runSequence([
                { e: this.leftCurtain, p: { translateX: this.toggleCurtain ? 0 : -500 }, o: { duration: Hub_1.duration, easing: Hub_1.easeOut } },
                { e: this.rightCurtain, p: { translateX: this.toggleCurtain ? 0 : 500 }, o: { duration: Hub_1.duration, easing: Hub_1.easeOut, sequenceQueue: false } }
            ]);
        };
        return Hub;
    }());
    Hub.duration = 1000;
    Hub.easeOut = [.2, 1, .8, .95];
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", HTMLElement)
    ], Hub.prototype, "containerContent", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", HTMLElement)
    ], Hub.prototype, "leftCurtain", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", HTMLElement)
    ], Hub.prototype, "rightCurtain", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", HTMLElement)
    ], Hub.prototype, "leftCorner", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", HTMLElement)
    ], Hub.prototype, "rightCorner", void 0);
    Hub = Hub_1 = __decorate([
        aurelia_framework_1.autoinject(),
        __metadata("design:paramtypes", [aurelia_animator_velocity_1.VelocityAnimator])
    ], Hub);
    exports.Hub = Hub;
    var Hub_1;
});

define('text!app.css', ['module'], function(module) { module.exports = "body {\n  background: -webkit-linear-gradient(#303030, #444444 45%, #444444 55%, #303030);\n  background: -o-linear-gradient(#303030, #444444 45%, #444444 55%, #303030);\n  background: linear-gradient(#303030, #444444 45%, #444444 55%, #303030);\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  font-family: 'Orbitron', sans-serif; }\n\nh1 {\n  color: blue; }\n"; });
define('text!app.html', ['module'], function(module) { module.exports = "<template>\r\n  <require from=\"./app.css\"></require>\r\n  <require from=\"./resources/elements/hub\"></require>\r\n  <h1></h1>\r\n\r\n  <hub></hub>\r\n</template>\r\n"; });
define('text!resources/elements/hub.html', ['module'], function(module) { module.exports = "<template><require from=\"./hub.css\"></require><div class=\"parent\"><div class=\"container-content\" ref=\"containerContent\"><div class=\"left-corner-boundary\" ref=\"leftCornerBoundary\"></div><div class=\"right-corner-boundary\" ref=\"rightCornerBoundary\"></div><p>Phasellus ac dictum nisi, non porttitor tortor. Phasellus lobortis, elit sed sodales scelerisque, erat ipsum elementum mi, vitae laoreet enim nisi sit amet leo. Suspendisse gravida, nisl non porta ultrices, nisi massa eleifend purus, sed aliquam diam sapien ut erat. In pellentesque</p><p>Phasellus ac dictum nisi, non porttitor tortor. Phasellus lobortis, elit sed sodales scelerisque, erat ipsum elementum mi, vitae laoreet enim nisi sit amet leo. Suspendisse gravida, nisl non porta ultrices, nisi massa eleifend purus, sed aliquam diam sapien ut erat. In pellentesque</p><p>Phasellus ac dictum nisi, non porttitor tortor. Phasellus lobortis, elit sed sodales scelerisque, erat ipsum elementum mi, vitae laoreet enim nisi sit amet leo. Suspendisse gravida, nisl non porta ultrices, nisi massa eleifend purus, sed aliquam diam sapien ut erat. In pellentesque</p><div class=\"left-curtain\" ref=\"leftCurtain\"></div><div class=\"right-curtain\" ref=\"rightCurtain\"> </div><div class=\"left-corner\" ref=\"leftCorner\"><div class=\"corner-border\"></div><ul><li click.delegate=\"curtainAnimate()\">First</li><li>Sample be</li><li>Sample twee</li></ul></div><div class=\"right-corner\" ref=\"rightCorner\"> </div></div></div></template>"; });
define('text!resources/colors.css', ['module'], function(module) { module.exports = ""; });
define('text!resources/elements/allen.html', ['module'], function(module) { module.exports = "<template>\r\n  <h1>${value}</h1>\r\n</template>"; });
define('text!resources/elements/hub.css', ['module'], function(module) { module.exports = ".parent {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.container-content, .container-curtains, .container-corners {\n  overflow: hidden;\n  width: 600px;\n  height: 400px; }\n\n.container-content {\n  background: radial-gradient(#00597f, #00354c);\n  color: white;\n  border: 1px solid #00a0e5;\n  box-shadow: 4px 4px 12px #222;\n  position: absolute; }\n  .container-content p {\n    padding: 10px;\n    font-size: 14px;\n    margin: 0; }\n  .container-content .left-corner-boundary, .container-content .right-corner-boundary {\n    width: 300px;\n    height: 300px;\n    shape-margin: 10px; }\n  .container-content .left-corner-boundary {\n    shape-outside: polygon(0 100px, 100% 100%, 0 100%);\n    clip-path: polygon(0 0, 100% 100%, 0 100%);\n    float: left;\n    margin-top: 100px; }\n  .container-content .right-corner-boundary {\n    shape-outside: polygon(0 0, 100% 0, 100% 100%);\n    clip-path: polygon(0 0, 100% 0, 100% 100%);\n    float: right; }\n  .container-content .left-corner, .container-content .right-corner {\n    width: 300px;\n    height: 300px;\n    position: absolute; }\n  .container-content .left-curtain, .container-content .right-curtain {\n    position: absolute;\n    top: 0;\n    width: 500px;\n    height: 400px; }\n  .container-content .left-curtain {\n    clip-path: polygon(0 0, 100px 0, 100% 100%, 0 100%);\n    background: linear-gradient(45deg, #001119, #007cb2 50%);\n    left: 0; }\n  .container-content .right-curtain {\n    clip-path: polygon(0 0, 100% 0, 100% 100%, 400px 100%);\n    background: linear-gradient(45deg, #007cb2 50%, #001119 100%);\n    right: 0; }\n  .container-content .left-corner {\n    shape-outside: polygon(0 100px, 100% 100%, 0 100%);\n    clip-path: polygon(0 0, 100% 100%, 0 100%);\n    background: linear-gradient(45deg, black, #00597f 49%, #007cb2 50%);\n    left: 0;\n    bottom: 0; }\n    .container-content .left-corner .corner-border {\n      width: 300px;\n      height: 300px;\n      border: 1px solid white;\n      shape-outside: polygon(0 0, 100% 0, 100% 100%);\n      float: right; }\n    .container-content .left-corner ul {\n      text-align: right; }\n  .container-content .right-corner {\n    shape-outside: polygon(0 0, 100% 0, 100% 100%);\n    clip-path: polygon(0 0, 100% 0, 100% 100%);\n    background: linear-gradient(45deg, #007cb2 50%, #00597f 51%, #001119);\n    right: 0;\n    top: 0; }\n\n.container-curtains {\n  position: absolute;\n  z-index: -1; }\n\n.container-corners {\n  position: absolute;\n  z-index: 10; }\n  .container-corners .left-corner, .container-corners .right-corner {\n    width: 300px;\n    height: 300px;\n    position: absolute; }\n  .container-corners .left-corner {\n    shape-outside: polygon(0 100px, 100% 100%, 0 100%);\n    clip-path: polygon(0 0, 100% 100%, 0 100%);\n    background: linear-gradient(45deg, black, #00597f 49%, #007cb2 50%);\n    left: 0;\n    top: 100px; }\n  .container-corners .right-corner {\n    shape-outside: polygon(0 0, 100% 0, 100% 100%);\n    clip-path: polygon(0 0, 100% 0, 100% 100%);\n    background: linear-gradient(45deg, #007cb2 50%, #00597f 51%, #001119);\n    right: 0;\n    top: 0; }\n"; });
//# sourceMappingURL=app-bundle.js.map