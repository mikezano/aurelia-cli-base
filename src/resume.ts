import {bindable, autoinject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

@autoinject()
export class Resume {
  @bindable value;

  public ea:EventAggregator;

    constructor(ea:EventAggregator){
      this.ea = ea;
      console.log('constructor');
      //this.ea.publish('closeCurtains',{});
    }

    public attached() {
        console.log("attached");
    }
 
    public activated() {
        console.log("activated");
    }
 
    public created() {
        console.log("created");
    }
 
    public activate() {
        console.log("activate");
    }
 
    public canActivate() {
        console.log("canActivate");

    }
}

