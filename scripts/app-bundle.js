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
    var Hub = (function () {
        function Hub(velocity) {
            this.velocity = velocity;
        }
        Hub.prototype.initialState = function () {
            this.container.style.height = '10px';
            this.container.style.width = '300px';
            this.leftCorner.style.transform = "translateX(-300px)";
            this.rightCorner.style.transform = "translateX(300px)";
        };
        Hub.prototype.attached = function () {
            console.log(this.container);
        };
        Hub.prototype.runSequence = function () {
            var duration = 1000;
            var easeOut = [.2, 1, .8, .95];
            var easeIn = [.95, .03, .95, .04];
            this.velocity.runSequence([
                { e: this.leftCorner, p: { translateX: -300 }, o: { duration: 0 } },
                { e: this.rightCorner, p: { translateX: 300 }, o: { duration: 0, sequenceQueue: false } },
                { e: this.container, p: { width: 600 }, o: { duration: duration / 3, easing: easeOut } },
                { e: this.container, p: { height: 400 }, o: { duration: duration / 2.5, easing: easeOut } },
                { e: this.leftCorner, p: { translateX: 0 }, o: { duration: duration / 2.5, easing: easeOut } },
                { e: this.rightCorner, p: { translateX: 0 }, o: { duration: duration / 2.5, easing: easeOut, sequenceQueue: false } },
                { e: this.leftCurtain, p: { translateX: -500 }, o: { duration: duration * 2, easing: easeOut } },
                { e: this.rightCurtain, p: { translateX: 500 }, o: { duration: duration * 2, easing: easeOut, sequenceQueue: false } }
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
    Hub = __decorate([
        aurelia_framework_1.autoinject(),
        __metadata("design:paramtypes", [aurelia_animator_velocity_1.VelocityAnimator])
    ], Hub);
    exports.Hub = Hub;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\r\n  <require from=\"./app.css\"></require>\r\n  <require from=\"./resources/elements/hub\"></require>\r\n  <h1></h1>\r\n\r\n  <hub></hub>\r\n</template>\r\n"; });
define('text!app.css', ['module'], function(module) { module.exports = "body {\n  background: -webkit-linear-gradient(#303030, #444444 45%, #444444 55%, #303030);\n  background: -o-linear-gradient(#303030, #444444 45%, #444444 55%, #303030);\n  background: linear-gradient(#303030, #444444 45%, #444444 55%, #303030);\n  background-repeat: no-repeat;\n  background-attachment: fixed; }\n\nh1 {\n  color: blue; }\n"; });
define('text!resources/elements/hub.html', ['module'], function(module) { module.exports = "<template><require from=\"./hub.css\"></require><div class=\"parent\"><div class=\"container-curtains\"><div class=\"left-curtain\" ref=\"leftCurtain\"></div><div class=\"right-curtain\" ref=\"rightCurtain\"> </div></div><div class=\"container-corners\"> <div class=\"left-corner\" ref=\"leftCorner\"></div><div class=\"right-corner\" ref=\"rightCorner\"> </div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat ex in sapien sollicitudin consectetur. Phasellus convallis scelerisque luctus. Mauris luctus eu nulla in vehicula. Nullam gravida tincidunt risus eget semper. Donec sollicitudin libero sed nisi luctus, nec rhoncus neque sagittis. Nam eu elit nec est vehicula viverra. Etiam euismod bibendum odio nec blandit. Curabitur posuere ligula quis turpis volutpat vehicula a ut est. Aenean euismod magna non lectus sollicitudin, non condimentum tortor tincidunt. Sed at tortor eu justo aliquet rhoncus sit amet vitae nunc. Vestibulum ac tortor leo. Suspendisse pretium augue sit amet lectus hendrerit pharetra. Suspendisse arcu neque, placerat quis commodo non, sagittis et dolor.     </p></div><!--.container(ref=\"container\")//.left-curtain(ref=\"leftCurtain\")\n.right-curtain(ref=\"rightCurtain\")\n.left-triangle(ref=\"leftCorner\")\n.right-triangle(ref=\"rightCorner\")\n    p Words\np Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat ex in sapien sollicitudin consectetur. Phasellus convallis scelerisque luctus. Mauris luctus eu nulla in vehicula. Nullam gravida tincidunt risus eget semper. Donec sollicitudin libero sed nisi luctus, nec rhoncus neque sagittis. Nam eu elit nec est vehicula viverra. Etiam euismod bibendum odio nec blandit. Curabitur posuere ligula quis turpis volutpat vehicula a ut est. Aenean euismod magna non lectus sollicitudin, non condimentum tortor tincidunt. Sed at tortor eu justo aliquet rhoncus sit amet vitae nunc. Vestibulum ac tortor leo. Suspendisse pretium augue sit amet lectus hendrerit pharetra. Suspendisse arcu neque, placerat quis commodo non, sagittis et dolor.\n//.container-polygon\n    .polygon\n    p Menu\n    p Menu 1\n    p Menu 2\n    p Menu 3\n    p Menu 4--></div></template>"; });
define('text!resources/elements/allen.html', ['module'], function(module) { module.exports = "<template>\r\n  <h1>${value}</h1>\r\n</template>"; });
define('text!resources/colors.css', ['module'], function(module) { module.exports = ""; });
define('text!resources/elements/hub.css', ['module'], function(module) { module.exports = ".parent {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.container-curtains {\n  width: 600px;\n  height: 400px;\n  border: 1px solid white;\n  position: absolute; }\n  .container-curtains .left-curtain, .container-curtains .right-curtain {\n    position: absolute;\n    top: 0;\n    width: 500px;\n    height: 400px; }\n  .container-curtains .left-curtain {\n    clip-path: polygon(0 0, 100px 0, 100% 100%, 0 100%);\n    background: linear-gradient(45deg, #001119, #007cb2 50%);\n    left: 0; }\n  .container-curtains .right-curtain {\n    clip-path: polygon(0 0, 100% 0, 100% 100%, 400px 100%);\n    background: linear-gradient(45deg, #007cb2 50%, #001119 100%);\n    right: 0; }\n\n.container-corners {\n  width: 600px;\n  height: 400px;\n  border: 1px solid red;\n  position: absolute; }\n  .container-corners .left-corner, .container-corners .right-corner {\n    width: 300px;\n    height: 300px; }\n  .container-corners .left-corner {\n    shape-outside: polygon(0 100px, 100% 100%, 0 100%);\n    clip-path: polygon(0 0, 100% 100%, 0 100%);\n    background: linear-gradient(45deg, black, #00597f 49%, #007cb2 50%);\n    float: left;\n    margin-top: 100px; }\n  .container-corners .right-corner {\n    shape-outside: polygon(0 0, 100% 0, 100% 100%);\n    clip-path: polygon(0 0, 100% 0, 100% 100%);\n    background: linear-gradient(45deg, #007cb2 50%, #00597f 51%, #001119);\n    float: right; }\n\n.container {\n  height: 400px;\n  width: 600px;\n  position: absolute;\n  overflow: hidden;\n  background: radial-gradient(#00597f, #00354c);\n  border: 1px solid #007cb2;\n  position: absolute;\n  color: white;\n  box-shadow: 4px 4px 16px #222;\n  z-index: 10; }\n  .container .left-curtain {\n    width: 500px;\n    height: 400px;\n    clip-path: polygon(0 0, 100px 0, 100% 100%, 0 100%);\n    background: linear-gradient(45deg, #001119, #007cb2 50%); }\n  .container .right-curtain {\n    width: 500px;\n    height: 400px;\n    clip-path: polygon(0 0, 100% 0, 100% 100%, 400px 100%);\n    background: linear-gradient(45deg, #007cb2 50%, #001119 100%);\n    position: absolute;\n    right: 0;\n    z-index: 1; }\n\n.container-polygon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n  .container-polygon p {\n    text-align: right; }\n  .container-polygon .polygon {\n    width: 600px;\n    height: 400px;\n    shape-outside: polygon(0 0, 300px 0, 600px 300px, 600px 400px, 300px 400px, 0 100px);\n    float: right; }\n"; });
//# sourceMappingURL=app-bundle.js.map