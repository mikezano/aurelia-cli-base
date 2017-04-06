
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
        this.ea.publish('toggleCurtains',{value:true});
        return next();
      }
    };
    var open = {
      run:(navigationInsruction, next)=>{
        debugger;
        this.ea.publish('toggleCurtains',{value:false});
        return next();
      }
    };    

    config.title="Zano";
    config.map([
      { route: ['', 'resume'], name: 'Resume',      moduleId: 'resume', nav: true, title: 'Resume' },
      { route: ['', 'home'], name: 'Home',      moduleId: 'home', nav: true, title: 'Home' },
      { route: ['css-tricks'], name: 'css-tricks',      moduleId: 'css-tricks', nav: true, title: 'CSS tricks' },
      { route: ['about'], name: 'about',      moduleId: 'about', nav: true, title: 'About' },
      { route: ['buttons'], name: 'buttons',      moduleId: 'experiments/buttons', nav: true, title: 'Buttons' },
      { route: ['particles'], name: 'particles',      moduleId: 'experiments/particles', nav: true, title: 'particles' }
    ]);
;
    this.router = router;
  }

  public closeCurtains():void{

    this.ea.publish('toggleCurtains',{value:false});
  }
}

//
//http://stackoverflow.com/questions/38508898/how-to-provide-information-to-candeactivate-in-aurelia-view-model