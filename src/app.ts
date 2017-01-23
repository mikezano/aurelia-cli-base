
import { autoinject, bindable } from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';
import {EventAggregator} from 'aurelia-event-aggregator';

@autoinject()
export class App {
  public router:Router;
  
  constructor(private ea:EventAggregator){
  }
  public configureRouter(config:RouterConfiguration, router:Router){
    //debugger;
    config.title="Zano";
    config.addPreRenderStep((s,v)=>{
          debugger;
      return this.closeCurtains();
    });
    config.map([
      { route: ['', 'resume'], name: 'resume',      moduleId: 'resume', nav: true, title: 'Resume' },
      { route: ['css-tricks'], name: 'css-tricks',      moduleId: 'css-tricks', nav: true, title: 'CSS tricks' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' }
    ]);
    //debugger;

    // config.addPostRenderStep(()=>{
    //   this.ea.publish('toggleCurtains',{value:false});
    // });
    this.router = router;
  }

  public closeCurtains():void{

    this.ea.publish('toggleCurtains',{value:false});
  }
}
