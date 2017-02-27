import {bindable, autoinject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {BaseVM} from './baseViewModel';

@autoinject()
export class Resume extends BaseVM {
  @bindable value;

    constructor(ea:EventAggregator){
        super(ea);
      //this.ea = ea;
      console.log('constructor');
      //this.ea.publish('closeCurtains',{});
    }


}

