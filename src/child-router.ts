 import { autoinject, bindable } from 'aurelia-framework';
 import {Router, RouterConfiguration} from 'aurelia-router';

export class ChildRouter {
  public heading = 'Child Router';

  @bindable
  public router: Router;

//   public attached(){
//     console.log(this.router);
//   }
 // public router: Router;

  //public configureRouter(config: RouterConfiguration, router: Router) {
  //   debugger;
  //   config.map([
  //     { route: ['', 'welcome'], name: 'welcome',       moduleId: 'welcome',       nav: true, title: 'Welcome' },
  //     { route: 'users',         name: 'users',         moduleId: 'users',         nav: true, title: 'Github Users' }
  //     //{ route: 'child-router',  name: 'child-router',  moduleId: 'child-router',  nav: true, title: 'Child Router' }
  //   ]);

  //   this.router = router;
  // }
}

