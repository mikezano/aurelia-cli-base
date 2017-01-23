
import { autoinject, bindable } from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';
import {EventAggregator} from 'aurelia-event-aggregator';

@autoinject()
export class App {
  public router:Router;
  
  constructor(private ea:EventAggregator){
  }
  public configureRouter(config:RouterConfiguration, router:Router){

    var close = {
      run:(navigationInsruction, next)=>{
        //debugger;
        this.ea.publish('toggleCurtains',{value:true});
        return next();
      }
    };
    var open = {
      run:(navigationInsruction, next)=>{
        //debugger;
        this.ea.publish('toggleCurtains',{value:false});
        return next();
      }
    };    
    //debugger;
    config.title="Zano";
    config.addPreActivateStep(close);
    config.addPostRenderStep(open);
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
