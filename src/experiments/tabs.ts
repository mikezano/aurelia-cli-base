import {bindable, autoinject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {BaseVM} from '../baseViewModel';

@autoinject()
export class Tabs extends BaseVM {

    constructor(ea:EventAggregator){
        super(ea);
    }
}
