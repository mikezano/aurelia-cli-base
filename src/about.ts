import {bindable, autoinject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {BaseVM} from './baseViewModel';

@autoinject()
export class About extends BaseVM{

    constructor(ea:EventAggregator){
    	super(ea);
    }
}
