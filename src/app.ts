
import { autoinject, bindable } from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  public router:Router;
  
  public configureRouter(config:RouterConfiguration, router:Router){
    //debugger;
    config.title="Zano";
    config.map([
      { route: ['', 'resume'], name: 'resume',      moduleId: 'resume', nav: true, title: 'Resume' },
      { route: ['css-tricks'], name: 'css-tricks',      moduleId: 'css-tricks', nav: true, title: 'CSS tricks' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' }
    ]);
    this.router = router;
  }
}
