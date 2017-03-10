import {bindable, autoinject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {ButtonCode as ButtonCodeElement} from '../resources/elements/button_code';
import {ButtonCode as ButtonCodeModel} from '../models/button_code';
import {BaseVM} from '../baseViewModel';

@autoinject()
export class ButtonSandbox extends BaseVM {

    public models:ButtonCodeModel[];
    constructor(ea:EventAggregator){
        super(ea);

        this.models = [];
        this.models.push(new ButtonCodeModel());
        this.models.push(new ButtonCodeModel());
        this.models.push(new ButtonCodeModel());
    }
}

