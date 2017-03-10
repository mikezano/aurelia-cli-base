
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
    //config.addPreActivateStep(close);
    //config.addPostRenderStep(open);
    config.map([
      { route: ['', 'resume'], name: 'Home',      moduleId: 'resume', nav: true, title: 'Home' },
      { route: ['css-tricks'], name: 'css-tricks',      moduleId: 'css-tricks', nav: true, title: 'CSS tricks' },
      { route: ['buttons'], name: 'buttons',      moduleId: 'experiments/buttonSandbox', nav: true, title: 'Buttons' },
      { route: ['particles'], name: 'particles',      moduleId: 'experiments/particles', nav: true, title: 'particles' }
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

//
//http://stackoverflow.com/questions/38508898/how-to-provide-information-to-candeactivate-in-aurelia-view-model