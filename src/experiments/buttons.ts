import {bindable, autoinject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {BaseVM} from '../baseViewModel';

@autoinject()
export class Buttons extends BaseVM {

    public three:string = "hoverButton";
    constructor(ea:EventAggregator){
        super(ea);
    }
}

