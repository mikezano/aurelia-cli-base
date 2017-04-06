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
define('about',["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "./baseViewModel"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, baseViewModel_1) {
    "use strict";
    var About = (function (_super) {
        __extends(About, _super);
        function About(ea) {
            return _super.call(this, ea) || this;
        }
        return About;
    }(baseViewModel_1.BaseVM));
    About = __decorate([
        aurelia_framework_1.autoinject(),
        __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator])
    ], About);
    exports.About = About;
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
                { route: ['', 'resume'], name: 'Resume', moduleId: 'resume', nav: true, title: 'Resume' },
                { route: ['', 'home'], name: 'Home', moduleId: 'home', nav: true, title: 'Home' },
                { route: ['css-tricks'], name: 'css-tricks', moduleId: 'css-tricks', nav: true, title: 'CSS tricks' },
                { route: ['about'], name: 'about', moduleId: 'about', nav: true, title: 'About' },
                { route: ['buttons'], name: 'buttons', moduleId: 'experiments/buttons', nav: true, title: 'Buttons' },
                { route: ['particles'], name: 'particles', moduleId: 'experiments/particles', nav: true, title: 'particles' }
            ]);
            ;
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
define('home',["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "./baseViewModel"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, baseViewModel_1) {
    "use strict";
    var Home = (function (_super) {
        __extends(Home, _super);
        function Home(ea) {
            return _super.call(this, ea) || this;
        }
        return Home;
    }(baseViewModel_1.BaseVM));
    Home = __decorate([
        aurelia_framework_1.autoinject(),
        __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator])
    ], Home);
    exports.Home = Home;
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
define('components/hoverButton',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    var HoverButton = (function () {
        function HoverButton() {
        }
        return HoverButton;
    }());
    HoverButton = __decorate([
        aurelia_framework_1.autoinject(),
        __metadata("design:paramtypes", [])
    ], HoverButton);
    exports.HoverButton = HoverButton;
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
define('experiments/buttons',["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "../baseViewModel"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, baseViewModel_1) {
    "use strict";
    var Buttons = (function (_super) {
        __extends(Buttons, _super);
        function Buttons(ea) {
            return _super.call(this, ea) || this;
        }
        return Buttons;
    }(baseViewModel_1.BaseVM));
    Buttons = __decorate([
        aurelia_framework_1.autoinject(),
        __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator])
    ], Buttons);
    exports.Buttons = Buttons;
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
define('experiments/buttonTemplate',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    var ButtonTemplate = (function () {
        function ButtonTemplate() {
        }
        ButtonTemplate.prototype.attached = function () {
            var _this = this;
            this.getScss("GET", "src/components/" + this.file + ".scss", function (result) {
                _this.scss = result;
            });
        };
        ButtonTemplate.prototype.getScss = function (method, url, done) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.onload = function () {
                done(xhr.response);
            };
            xhr.send();
        };
        return ButtonTemplate;
    }());
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], ButtonTemplate.prototype, "file", void 0);
    ButtonTemplate = __decorate([
        aurelia_framework_1.autoinject(),
        __metadata("design:paramtypes", [])
    ], ButtonTemplate);
    exports.ButtonTemplate = ButtonTemplate;
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
define('experiments/particles',["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "../baseViewModel"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, baseViewModel_1) {
    "use strict";
    var Particles = (function (_super) {
        __extends(Particles, _super);
        function Particles(ea) {
            return _super.call(this, ea) || this;
        }
        return Particles;
    }(baseViewModel_1.BaseVM));
    Particles = __decorate([
        aurelia_framework_1.autoinject(),
        __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator])
    ], Particles);
    exports.Particles = Particles;
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
define('resources/elements/button_code',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    var ButtonCode = (function () {
        function ButtonCode() {
        }
        ButtonCode.prototype.valueChanged = function (newValue, oldValue) {
        };
        return ButtonCode;
    }());
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], ButtonCode.prototype, "value", void 0);
    exports.ButtonCode = ButtonCode;
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
        Hub.prototype.activeArea = function (element) {
            var target = element.target;
            if (target.nodeName == "A") {
                var elements = document.querySelectorAll(".nav-item");
                for (var i = 0; i < elements.length; i++)
                    elements[i].classList.remove('active');
                target.classList.add('active');
            }
            return true;
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

define('text!about.html', ['module'], function(module) { module.exports = "<template><require from=\"./about.css\"></require><h1 class=\"header\">About</h1></template>"; });
define('text!about.css', ['module'], function(module) { module.exports = ""; });
define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"./app.css\"></require><require from=\"resources/elements/hub\"></require><hub router.bind=\"router\"></hub></template>"; });
define('text!app.css', ['module'], function(module) { module.exports = "body {\n  background: -webkit-linear-gradient(#303030, #444444 45%, #444444 55%, #303030);\n  background: -o-linear-gradient(#303030, #444444 45%, #444444 55%, #303030);\n  background: linear-gradient(#303030, #444444 45%, #444444 55%, #303030);\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  font-family: 'Orbitron', sans-serif; }\n\n.au-enter {\n  opacity: 0; }\n\n.au-enter-active {\n  animation: fade-in .5s linear; }\n\n@keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n.header {\n  color: orange;\n  text-align: center; }\n"; });
define('text!css-tricks.html', ['module'], function(module) { module.exports = "<template><require from=\"./css-tricks.css\"></require><div class=\"au-animate\"><h3>Select a topic</h3><ul class=\"tricks\"><li><a href=\"#/buttons\"> <span>Buttons</span><i class=\"fa fa-angle-right\"></i></a></li><li><a href=\"#/particles\"> <span>Particles</span><i class=\"fa fa-angle-right\"></i></a></li><li><a href=\"#/buttons\"> <span>Inputs</span><i class=\"fa fa-angle-right\"></i></a></li><li><a href=\"#/buttons\"><span>Drop</span><i class=\"fa fa-angle-right\"></i></a></li><li><a href=\"#/buttons\"> <span>Grid</span><i class=\"fa fa-angle-right\"></i></a></li></ul></div></template>"; });
define('text!css-tricks.css', ['module'], function(module) { module.exports = "h3 {\n  text-align: center;\n  font-size: 30px;\n  font-weight: 100;\n  color: orange; }\n\nul.tricks {\n  text-align: left; }\n  ul.tricks li {\n    list-style-type: none;\n    margin: 20px 0; }\n    ul.tricks li a {\n      margin-left: 80px;\n      color: white;\n      display: inline-block;\n      text-decoration: none;\n      transition: .2s all ease-in-out;\n      border-bottom: 1px solid white;\n      padding: 8px 0;\n      width: 120px; }\n      ul.tricks li a span {\n        padding: 0 4px; }\n      ul.tricks li a i {\n        float: right; }\n      ul.tricks li a:hover {\n        text-shadow: 2px 2px 4px black;\n        border-bottom: 1px solid orange;\n        color: orange; }\n        ul.tricks li a:hover i {\n          animation: go-next .8s linear infinite; }\n\n@keyframes go-next {\n  0% {\n    opacity: 0;\n    transform: translateX(0); }\n  20% {\n    opacity: 1; }\n  80% {\n    opacity: 1; }\n  100% {\n    transform: translateX(50px);\n    opacity: 0; } }\n"; });
define('text!home.html', ['module'], function(module) { module.exports = "<template><h1 class=\"header\">Home</h1><p>Need a cool button?</p><p>Need to add box shadows?</p><p>How does one add curves</p><a href=\"#/css-tricks\"> <button>See how it's done</button></a></template>"; });
define('text!home.css', ['module'], function(module) { module.exports = ""; });
define('text!resume.html', ['module'], function(module) { module.exports = "<template><div class=\"au-animate\"><p>My person al site always under construction</p><p>Accomplished individual who has contributed to cutting-edge groups investing in current/future web technologies looking to continue software engineer growth and become an influential member in and outside the team.</p><p>Constructed single page AngularJS/C# based web applications with SQL/MongoDB backends to enhance supply chain management. Expertise and passion in HTML5/CSS3 (SCSS) technologies looked to by peers for efficient use of, advice, and assistance with web page styling.</p></div></template>"; });
define('text!components/hoverButton.css', ['module'], function(module) { module.exports = "button {\n  color: green; }\n"; });
define('text!components/hoverButton.html', ['module'], function(module) { module.exports = "<template><require from=\"./hoverButton.css\"></require><button class=\"hover\">This Button</button></template>"; });
define('text!experiments/buttons.html', ['module'], function(module) { module.exports = "<template><require from=\"./buttons.css\"></require><require from=\"./buttonTemplate\"></require><require from=\"../components/hoverButton\"></require><div class=\"au-animate button-sandbox\"><a href=\"javascript:history.back()\">Go Back</a><button-template file.bind=\"'hoverButton'\"></button-template><button-template file.bind=\"'zoomButton'\"></button-template><div class=\"grid\"><div class=\"header\">Normal</div><div class=\"button\"><button class=\"background-color\">Button</button></div><div class=\"code\">Code</div></div><div class=\"grid\"><div class=\"header\">Fading Border</div><div class=\"button\"><button class=\"background-color\">Button</button></div><div class=\"code\"><pre>button{\n  text-decoration:none;\n  border:1px solid green;\n  &:hover{\n\t  color:white;\n  }\n}\t\t</pre></div></div><div class=\"grid\"><div class=\"cell header\">Fading Border</div><div class=\"cell button\"><button class=\"background-color\">Button</button></div><div class=\"cell code\"><pre>button{\n  text-decoration:none;\n  border:1px solid green;\n  &:hover{\n\t  color:white;\n  }\n}\t</pre></div></div><div class=\"grid\"><div class=\"cell header\">Fading Border</div><div class=\"cell button\"><button class=\"background-color\">Button</button></div><div class=\"cell code\"><pre>button{\n  text-decoration:none;\n  border:1px solid green;\n  &:hover{\n\t  color:white;\n  }\n}\t\t\t\t\t\t\t\t\t\t\t</pre></div></div></div></template>"; });
define('text!experiments/buttons.css', ['module'], function(module) { module.exports = ".button-sandbox {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 10;\n  background: radial-gradient(#888, #777);\n  padding: 10px; }\n  .button-sandbox .grid {\n    margin: 10px;\n    border: 1px solid white;\n    display: grid;\n    grid-template-columns: 40% 60%;\n    width: 400px; }\n    .button-sandbox .grid .header {\n      font-size: 20px;\n      text-align: center;\n      grid-row: 1;\n      grid-column: 1/3;\n      margin: 10px; }\n    .button-sandbox .grid .button {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      border-right: 1px solid white;\n      margin: 10px; }\n    .button-sandbox .grid .code {\n      margin: 10px; }\n  .button-sandbox button {\n    font-size: 20px;\n    border: none;\n    padding: 4px 10px; }\n    .button-sandbox button.background-color {\n      color: #00998f;\n      transition: all .2s ease-in-out;\n      background-color: #00ffee; }\n      .button-sandbox button.background-color:hover {\n        background-color: #00ccbe;\n        box-shadow: 2px 2px 4px black;\n        color: #00ffee; }\n    .button-sandbox button.border {\n      color: white;\n      transition: all .2s ease-in-out;\n      background-color: #34c;\n      border: 3px solid #2936a3; }\n      .button-sandbox button.border:hover {\n        border: 3px solid #1f297a; }\n"; });
define('text!experiments/buttonTemplate.html', ['module'], function(module) { module.exports = "<template><div>${file}</div><compose view=\"components/${file}.html\"></compose><pre>${scss}</pre><!--https://github.com/aurelia/templating/issues/307--></template>"; });
define('text!experiments/particles.css', ['module'], function(module) { module.exports = ".particles {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 10;\n  background: radial-gradient(#333, #222);\n  padding: 10px;\n  display: flex;\n  justify-content: center; }\n"; });
define('text!experiments/particles.html', ['module'], function(module) { module.exports = "<template><require from=\"./particles.css\"></require><div class=\"au-animate particles\"><h1>Hello</h1></div></template>"; });
define('text!resources/colors.css', ['module'], function(module) { module.exports = ""; });
define('text!resources/elements/button_code.html', ['module'], function(module) { module.exports = "<template><require from=\"./button_code.css\"></require><div class=\"grid\"><div class=\"header\">${model.title}</div><div class=\"button\"><button class=\"${model.className}\">Button</button></div><div class=\"code\"><pre>${model.code}</pre></div></div></template>"; });
define('text!resources/elements/button_code.css', ['module'], function(module) { module.exports = ".grid {\n  margin: 10px;\n  border: 1px solid white;\n  display: grid;\n  grid-template-columns: 40% 60%;\n  width: 400px; }\n  .grid .header {\n    font-size: 20px;\n    text-align: center;\n    grid-row: 1;\n    grid-column: 1/3;\n    margin: 10px; }\n  .grid .button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-right: 1px solid white;\n    margin: 10px; }\n  .grid .code {\n    margin: 10px; }\n"; });
define('text!resources/elements/hub.css', ['module'], function(module) { module.exports = ".parent {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.container-content, .container-curtains, .container-corners {\n  overflow: hidden;\n  width: 600px;\n  height: 400px; }\n\n.container-content {\n  background: radial-gradient(#00597f, #00354c);\n  color: white;\n  border: 1px solid #00a0e5;\n  box-shadow: 4px 4px 12px #222;\n  position: absolute; }\n  .container-content p {\n    padding: 10px;\n    font-size: 14px;\n    margin: 0; }\n  .container-content .left-corner-boundary, .container-content .right-corner-boundary {\n    width: 300px;\n    height: 300px;\n    shape-margin: 10px; }\n  .container-content .left-corner-boundary {\n    shape-outside: polygon(0 100px, 100% 100%, 0 100%);\n    clip-path: polygon(0 0, 100% 100%, 0 100%);\n    float: left;\n    margin-top: 100px; }\n  .container-content .right-corner-boundary {\n    shape-outside: polygon(0 0, 100% 0, 100% 100%);\n    clip-path: polygon(0 0, 100% 0, 100% 100%);\n    float: right; }\n  .container-content .left-corner, .container-content .right-corner {\n    width: 300px;\n    height: 300px;\n    position: absolute; }\n  .container-content .left-curtain, .container-content .right-curtain {\n    position: absolute;\n    top: 0;\n    width: 500px;\n    height: 400px; }\n  .container-content .left-curtain {\n    clip-path: polygon(0 0, 100px 0, 100% 100%, 0 100%);\n    background: linear-gradient(45deg, #001119, #007cb2 50%);\n    left: 0; }\n  .container-content .right-curtain {\n    clip-path: polygon(0 0, 100% 0, 100% 100%, 400px 100%);\n    background: linear-gradient(45deg, #007cb2 50%, #001119 100%);\n    right: 0; }\n  .container-content .left-corner {\n    shape-outside: polygon(0 100px, 100% 100%, 0 100%);\n    clip-path: polygon(0 0, 100% 100%, 0 100%);\n    background: linear-gradient(45deg, black, #00597f 49%, #007cb2 50%);\n    left: 0;\n    bottom: 0; }\n    .container-content .left-corner .corner-border {\n      width: 300px;\n      height: 300px;\n      shape-outside: polygon(0 50%, 0 100%, 50% 100%);\n      float: left; }\n    .container-content .left-corner p:first-of-type {\n      margin-top: 140px; }\n    .container-content .left-corner p a {\n      color: white;\n      text-decoration: none;\n      font-size: 26px;\n      font-weight: 100;\n      transition: all .2s ease-in-out;\n      border-bottom: 4px solid transparent; }\n      .container-content .left-corner p a:hover, .container-content .left-corner p a.active {\n        border-bottom: 4px solid #00a0e5;\n        text-shadow: 2px 2px 4px #222; }\n  .container-content .right-corner {\n    shape-outside: polygon(0 0, 100% 0, 100% 100%);\n    clip-path: polygon(0 0, 100% 0, 100% 100%);\n    background: linear-gradient(45deg, #007cb2 50%, #00597f 51%, #001119);\n    right: 0;\n    top: 0; }\n    .container-content .right-corner .corner-border {\n      width: 300px;\n      height: 300px;\n      border: 1px solid white;\n      shape-outside: polygon(0 0, 0 100%, 100% 100%);\n      float: left; }\n    .container-content .right-corner ul {\n      list-style-type: none; }\n      .container-content .right-corner ul li {\n        margin-top: 20px; }\n        .container-content .right-corner ul li a {\n          color: white;\n          text-decoration: none;\n          font-size: 16px;\n          margin-left: 20px;\n          transition: all .2s ease-in-out;\n          border-bottom: 3px solid transparent; }\n          .container-content .right-corner ul li a:hover {\n            border-bottom: 3px solid #007cb2;\n            text-shadow: 2px 2px 4px #003146; }\n\n.container-curtains {\n  position: absolute;\n  z-index: -1; }\n\n.container-corners {\n  position: absolute;\n  z-index: 10; }\n  .container-corners .left-corner, .container-corners .right-corner {\n    width: 300px;\n    height: 300px;\n    position: absolute; }\n  .container-corners .left-corner {\n    shape-outside: polygon(0 100px, 100% 100%, 0 100%);\n    clip-path: polygon(0 0, 100% 100%, 0 100%);\n    background: linear-gradient(45deg, black, #00597f 49%, #007cb2 50%);\n    left: 0;\n    top: 100px; }\n  .container-corners .right-corner {\n    shape-outside: polygon(0 0, 100% 0, 100% 100%);\n    clip-path: polygon(0 0, 100% 0, 100% 100%);\n    background: linear-gradient(45deg, #007cb2 50%, #00597f 51%, #001119);\n    right: 0;\n    top: 0; }\n"; });
define('text!resources/elements/hub.html', ['module'], function(module) { module.exports = "<template><require from=\"./hub.css\"></require><div class=\"parent\"><div class=\"container-content\" ref=\"containerContent\"><div class=\"left-corner-boundary\" ref=\"leftCornerBoundary\"></div><div class=\"right-corner-boundary\" ref=\"rightCornerBoundary\"></div><router-view></router-view><div class=\"left-curtain\" ref=\"leftCurtain\"></div><div class=\"right-curtain\" ref=\"rightCurtain\"> </div><div class=\"left-corner\" ref=\"leftCorner\" click.delegate=\"activeArea($event)\"><!--http://stackoverflow.com/questions/2717480/css-selector-for-first-element-with-class/8539107#8539107--><div class=\"corner-border\"> </div><p><a class=\"nav-item\" href=\"#/home\">Home</a></p><p><a class=\"nav-item\" href=\"#/css-tricks\">CSS</a></p><p><a class=\"nav-item\" href=\"#/about\">About</a></p></div><div class=\"right-corner\" ref=\"rightCorner\"> <div class=\"corner-border\"> </div><ul> <li><a href=\"#/resume\">Concepts</a></li><li>                           <a href=\"#/css-tricks\">Components      </a></li><li>                           <a href=\"#/css-tricks\">Tricks   </a></li></ul></div></div></div></template>"; });
define('text!components/zoomButton.html', ['module'], function(module) { module.exports = "<template><button>Help</button></template>"; });
define('text!components/zoomButton.css', ['module'], function(module) { module.exports = ""; });
//# sourceMappingURL=app-bundle.js.map