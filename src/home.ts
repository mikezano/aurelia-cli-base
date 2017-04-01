import {bindable, autoinject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {BaseVM} from './baseViewModel';

@autoinject()
export class Home extends BaseVM {

    constructor(ea:EventAggregator){
        super(ea);
    }
}

