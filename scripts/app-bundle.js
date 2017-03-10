var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('app',["require", "exports", "aurelia-framework", "aurelia-event-aggregator"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1) {
    "use strict";
    var App = (function () {
        function App(ea) {
            this.ea = ea;
        }
        App.prototype.configureRouter = function (config, router) {
            var _this = this;
            var close = {
                run: function (navigationInsruction, next) {
                    _this.ea.publish('toggleCurtains', { value: true });
                    return next();
                }
            };
            var open = {
                run: function (navigationInsruction, next) {
                    debugger;
                    _this.ea.publish('toggleCurtains', { value: false });
                    return next();
                }
            };
            config.title = "Zano";
            config.map([
                { route: ['', 'resume'], name: 'Home', moduleId: 'resume', nav: true, title: 'Home' },
                { route: ['css-tricks'], name: 'css-tricks', moduleId: 'css-tricks', nav: true, title: 'CSS tricks' },
                { route: ['buttons'], name: 'buttons', moduleId: 'experiments/buttonSandbox', nav: true, title: 'Buttons' }
            ]);
            this.router = router;
        };
        App.prototype.closeCurtains = function () {
            this.ea.publish('toggleCurtains', { value: false });
        };
        return App;
    }());
    App = __decorate([
        aurelia_framework_1.autoinject(),
        __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator])
    ], App);
    exports.App = App;
});

define('baseViewModel',["require", "exports"], function (require, exports) {
    "use strict";
    var BaseVM = (function () {
        function BaseVM(ea) {
            this._ea = ea;
        }
        BaseVM.prototype.attached = function () {
            console.log("attached");
            this._ea.publish('toggleCurtains', { value: false, wait: 0 });
        };
        BaseVM.prototype.activated = function () {
            console.log("activated");
        };
        BaseVM.prototype.created = function () {
            console.log("created");
        };
        BaseVM.prototype.activate = function () {
            console.log("activate");
        };
        BaseVM.prototype.canActivate = function () {
            console.log("canActivate");
        };
        BaseVM.prototype.canDeactivate = function () {
            return true;
        };
        BaseVM.prototype.deactivate = function () {
            var _this = this;
            return new Promise(function (resolve) {
                _this._ea.publish('toggleCurtains', { value: true, wait: 0 });
                setTimeout(function () {
                    resolve();
                }, 500);
            });
        };
        return BaseVM;
    }());
    exports.BaseVM = BaseVM;
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
define('child-router',["require", "exports", "aurelia-framework", "aurelia-router"], function (require, exports, aurelia_framework_1, aurelia_router_1) {
    "use strict";
    var ChildRouter = (function () {
        function ChildRouter() {
            this.heading = 'Child Router';
        }
        return ChildRouter;
    }());
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", aurelia_router_1.Router)
    ], ChildRouter.prototype, "router", void 0);
    exports.ChildRouter = ChildRouter;
});

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('css-tricks',["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "./baseViewModel"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, baseViewModel_1) {
    "use strict";
    var CssTricks = (function (_super) {
        __extends(CssTricks, _super);
        function CssTricks(ea) {
            return _super.call(this, ea) || this;
        }
        return CssTricks;
    }(baseViewModel_1.BaseVM));
    CssTricks = __decorate([
        aurelia_framework_1.autoinject(),
        __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator])
    ], CssTricks);
    exports.CssTricks = CssTricks;
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
            .plugin("aurelia-animator-css")
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

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resume',["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "./baseViewModel"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, baseViewModel_1) {
    "use strict";
    var Resume = (function (_super) {
        __extends(Resume, _super);
        function Resume(ea) {
            var _this = _super.call(this, ea) || this;
            console.log('constructor');
            return _this;
        }
        return Resume;
    }(baseViewModel_1.BaseVM));
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], Resume.prototype, "value", void 0);
    Resume = __decorate([
        aurelia_framework_1.autoinject(),
        __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator])
    ], Resume);
    exports.Resume = Resume;
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
define('users',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    var Users = (function () {
        function Users() {
        }
        Users.prototype.valueChanged = function (newValue, oldValue) {
        };
        return Users;
    }());
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], Users.prototype, "value", void 0);
    exports.Users = Users;
});

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('experiments/buttonSandbox',["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "../baseViewModel"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, baseViewModel_1) {
    "use strict";
    var ButtonSandbox = (function (_super) {
        __extends(ButtonSandbox, _super);
        function ButtonSandbox(ea) {
            return _super.call(this, ea) || this;
        }
        return ButtonSandbox;
    }(baseViewModel_1.BaseVM));
    ButtonSandbox = __decorate([
        aurelia_framework_1.autoinject(),
        __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator])
    ], ButtonSandbox);
    exports.ButtonSandbox = ButtonSandbox;
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
define('resources/elements/hub',["require", "exports", "aurelia-framework", "aurelia-animator-velocity", "aurelia-router", "aurelia-event-aggregator"], function (require, exports, aurelia_framework_1, aurelia_animator_velocity_1, aurelia_router_1, aurelia_event_aggregator_1) {
    "use strict";
    var Hub = Hub_1 = (function () {
        function Hub(velocity, ea) {
            var _this = this;
            this.toggleCurtain = false;
            this.firstTime = true;
            this.velocity = velocity;
            this.ea = ea;
            this.ea.subscribe('toggleCurtains', function (data) {
                if (_this.firstTime != true)
                    _this.curtainAnimate(data.value, data.wait);
                _this.firstTime = false;
            });
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
                { e: this.leftCorner, p: { translateX: 0 }, o: { duration: Hub_1.duration / 2, easing: Hub_1.easeOut } },
                { e: this.rightCorner, p: { translateX: 0 }, o: { duration: Hub_1.duration / 2, easing: Hub_1.easeOut, sequenceQueue: false } },
                { e: this.leftCurtain, p: { translateX: -500 }, o: { duration: Hub_1.duration * 1.5, easing: Hub_1.easeOut } },
                { e: this.rightCurtain, p: { translateX: 500 }, o: { duration: Hub_1.duration * 1.5, easing: Hub_1.easeOut, sequenceQueue: false } }
            ]);
        };
        Hub.prototype.curtainAnimate = function (value, wait) {
            if (wait === void 0) { wait = 0; }
            this.toggleCurtain = value;
            this.velocity.runSequence([
                { e: this.leftCurtain,
                    p: { translateX: this.toggleCurtain ? 0 : -500 },
                    o: { duration: Hub_1.duration / (this.toggleCurtain ? 2 : 1), easing: Hub_1.easeOut } },
                { e: this.rightCurtain,
                    p: { translateX: this.toggleCurtain ? 0 : 500 },
                    o: { duration: Hub_1.duration / (this.toggleCurtain ? 2 : 1), easing: Hub_1.easeOut, sequenceQueue: false } }
            ]);
        };
        return Hub;
    }());
    Hub.duration = 1000;
    Hub.easeOut = [.2, 1, .8, .95];
    Hub.easeOutInverse = [.62, .03, .93, .45];
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
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", aurelia_router_1.Router)
    ], Hub.prototype, "router", void 0);
    Hub = Hub_1 = __decorate([
        aurelia_framework_1.autoinject(),
        __metadata("design:paramtypes", [aurelia_animator_velocity_1.VelocityAnimator, aurelia_event_aggregator_1.EventAggregator])
    ], Hub);
    exports.Hub = Hub;
    var Hub_1;
});

define('text!child-router.html', ['module'], function(module) { module.exports = "<template>\r\n  <h1>The child is here</h1>\r\n      <ul class=\"nav navbar-nav\">\r\n        <li repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\">\r\n          <a data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1.in\" href.bind=\"row.href\">${row.title}</a>\r\n        </li>\r\n      </ul>\r\n  \r\n  <!--<router-view></router-view>-->\r\n</template>"; });
define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"./app.css\"></require><require from=\"resources/elements/hub\"></require><hub router.bind=\"router\"></hub></template>"; });
define('text!users.html', ['module'], function(module) { module.exports = "<template>\r\n  <h1>Users</h1>\r\n</template>"; });
define('text!app.css', ['module'], function(module) { module.exports = "body {\n  background: -webkit-linear-gradient(#303030, #444444 45%, #444444 55%, #303030);\n  background: -o-linear-gradient(#303030, #444444 45%, #444444 55%, #303030);\n  background: linear-gradient(#303030, #444444 45%, #444444 55%, #303030);\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  font-family: 'Orbitron', sans-serif; }\n\n.au-enter {\n  opacity: 0; }\n\n.au-enter-active {\n  animation: fade-in .5s linear; }\n\n@keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n"; });
define('text!css-tricks.html', ['module'], function(module) { module.exports = "<template><require from=\"./css-tricks.css\"></require><ul class=\"au-animate tricks\"><li><a href=\"#/buttons\">Rain</a></li><li><a href=\"#/buttons\">Shapes</a></li><li><a href=\"#/buttons\">Grid</a></li><li><a href=\"#/buttons\">Overlap</a></li><li><a href=\"#/buttons\">Display</a></li><li><a href=\"#/buttons\">Absolute</a></li><li><a href=\"#/buttons\">Zano</a></li></ul></template>"; });
define('text!css-tricks.css', ['module'], function(module) { module.exports = "ul.tricks {\n  text-align: center; }\n  ul.tricks li {\n    list-style-type: none;\n    margin: 20px 0; }\n    ul.tricks li a {\n      color: white;\n      text-decoration: none;\n      text-align: left;\n      transition: .2s all ease-in-out;\n      padding: 8px 0; }\n      ul.tricks li a:hover {\n        color: #003146;\n        transform: scale(1.4);\n        background-color: white;\n        padding: 8px 30px;\n        box-shadow: 4px 4px 8px #333; }\n"; });
define('text!resume.html', ['module'], function(module) { module.exports = "<template><div class=\"au-animate\"><p>My person al site always under construction</p><p>Accomplished individual who has contributed to cutting-edge groups investing in current/future web technologies looking to continue software engineer growth and become an influential member in and outside the team.</p><p>Constructed single page AngularJS/C# based web applications with SQL/MongoDB backends to enhance supply chain management. Expertise and passion in HTML5/CSS3 (SCSS) technologies looked to by peers for efficient use of, advice, and assistance with web page styling.</p></div></template>"; });
define('text!experiments/buttonSandbox.css', ['module'], function(module) { module.exports = ".button-sandbox {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 10;\n  background: radial-gradient(#ddd, #888);\n  padding: 10px;\n  display: flex;\n  justify-content: center; }\n  .button-sandbox button {\n    font-size: 20px;\n    border: none;\n    padding: 4px 10px; }\n    .button-sandbox button.background-color {\n      color: #00998f;\n      transition: all .2s ease-in-out;\n      background-color: #00ffee; }\n      .button-sandbox button.background-color:hover {\n        background-color: #00ccbe;\n        box-shadow: 2px 2px 4px black;\n        color: #00ffee; }\n    .button-sandbox button.border {\n      color: white;\n      transition: all .2s ease-in-out;\n      background-color: #34c;\n      border: 3px solid #2936a3; }\n      .button-sandbox button.border:hover {\n        border: 3px solid #1f297a; }\n"; });
define('text!experiments/buttonSandbox.html', ['module'], function(module) { module.exports = "<template><require from=\"./buttonSandbox.css\"></require><div class=\"au-animate button-sandbox\"><div><a href=\"javascript:history.back()\">Go Back</a><h2>Background</h2><button class=\"background-color\">Button</button><h2>Border</h2><button class=\"border\">Button</button></div></div></template>"; });
define('text!resources/colors.css', ['module'], function(module) { module.exports = ""; });
define('text!resources/elements/hub.html', ['module'], function(module) { module.exports = "<template><require from=\"./hub.css\"></require><div class=\"parent\"><div class=\"container-content\" ref=\"containerContent\"><div class=\"left-corner-boundary\" ref=\"leftCornerBoundary\"></div><div class=\"right-corner-boundary\" ref=\"rightCornerBoundary\"></div><router-view></router-view><div class=\"left-curtain\" ref=\"leftCurtain\"></div><div class=\"right-curtain\" ref=\"rightCurtain\"> </div><div class=\"left-corner\" ref=\"leftCorner\"><div class=\"corner-border\"></div><!--ul(repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\")li\n    a(href.bind=\"row.href\") ${row.title}  --><ul class=\"${row.isActive ? 'active' : ''}\"><li><a href=\"#/resume\">Home</a></li><li>                           <a href=\"#/css-tricks\">CSS                            </a></li></ul></div><div class=\"right-corner\" ref=\"rightCorner\"> </div></div></div></template>"; });
define('text!resources/elements/hub.css', ['module'], function(module) { module.exports = ".parent {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.container-content, .container-curtains, .container-corners {\n  overflow: hidden;\n  width: 600px;\n  height: 400px; }\n\n.container-content {\n  background: radial-gradient(#00597f, #00354c);\n  color: white;\n  border: 1px solid #00a0e5;\n  box-shadow: 4px 4px 12px #222;\n  position: absolute; }\n  .container-content p {\n    padding: 10px;\n    font-size: 14px;\n    margin: 0; }\n  .container-content .left-corner-boundary, .container-content .right-corner-boundary {\n    width: 300px;\n    height: 300px;\n    shape-margin: 10px; }\n  .container-content .left-corner-boundary {\n    shape-outside: polygon(0 100px, 100% 100%, 0 100%);\n    clip-path: polygon(0 0, 100% 100%, 0 100%);\n    float: left;\n    margin-top: 100px; }\n  .container-content .right-corner-boundary {\n    shape-outside: polygon(0 0, 100% 0, 100% 100%);\n    clip-path: polygon(0 0, 100% 0, 100% 100%);\n    float: right; }\n  .container-content .left-corner, .container-content .right-corner {\n    width: 300px;\n    height: 300px;\n    position: absolute; }\n  .container-content .left-curtain, .container-content .right-curtain {\n    position: absolute;\n    top: 0;\n    width: 500px;\n    height: 400px; }\n  .container-content .left-curtain {\n    clip-path: polygon(0 0, 100px 0, 100% 100%, 0 100%);\n    background: linear-gradient(45deg, #001119, #007cb2 50%);\n    left: 0; }\n  .container-content .right-curtain {\n    clip-path: polygon(0 0, 100% 0, 100% 100%, 400px 100%);\n    background: linear-gradient(45deg, #007cb2 50%, #001119 100%);\n    right: 0; }\n  .container-content .left-corner {\n    shape-outside: polygon(0 100px, 100% 100%, 0 100%);\n    clip-path: polygon(0 0, 100% 100%, 0 100%);\n    background: linear-gradient(45deg, black, #00597f 49%, #007cb2 50%);\n    left: 0;\n    bottom: 0; }\n    .container-content .left-corner .corner-border {\n      width: 300px;\n      height: 300px;\n      border: 1px solid white;\n      shape-outside: polygon(0 0, 100% 0, 100% 100%);\n      float: right; }\n    .container-content .left-corner ul {\n      text-align: right;\n      list-style-type: none; }\n      .container-content .left-corner ul li {\n        margin-top: 20px; }\n        .container-content .left-corner ul li a {\n          color: white;\n          text-decoration: none;\n          font-size: 20px;\n          margin-right: 20px;\n          transition: all .2s ease-in-out;\n          border-bottom: 6px solid transparent; }\n          .container-content .left-corner ul li a:hover {\n            border-bottom: 6px solid #007cb2; }\n  .container-content .right-corner {\n    shape-outside: polygon(0 0, 100% 0, 100% 100%);\n    clip-path: polygon(0 0, 100% 0, 100% 100%);\n    background: linear-gradient(45deg, #007cb2 50%, #00597f 51%, #001119);\n    right: 0;\n    top: 0; }\n\n.container-curtains {\n  position: absolute;\n  z-index: -1; }\n\n.container-corners {\n  position: absolute;\n  z-index: 10; }\n  .container-corners .left-corner, .container-corners .right-corner {\n    width: 300px;\n    height: 300px;\n    position: absolute; }\n  .container-corners .left-corner {\n    shape-outside: polygon(0 100px, 100% 100%, 0 100%);\n    clip-path: polygon(0 0, 100% 100%, 0 100%);\n    background: linear-gradient(45deg, black, #00597f 49%, #007cb2 50%);\n    left: 0;\n    top: 100px; }\n  .container-corners .right-corner {\n    shape-outside: polygon(0 0, 100% 0, 100% 100%);\n    clip-path: polygon(0 0, 100% 0, 100% 100%);\n    background: linear-gradient(45deg, #007cb2 50%, #00597f 51%, #001119);\n    right: 0;\n    top: 0; }\n"; });
//# sourceMappingURL=app-bundle.js.map