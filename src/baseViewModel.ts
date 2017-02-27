import {EventAggregator} from 'aurelia-event-aggregator';

export class BaseVM {

	private _ea:EventAggregator;
    constructor(ea:EventAggregator){
        this._ea = ea;
    }

    public attached() {
        console.log("attached");
        this._ea.publish('toggleCurtains',{value:false, wait:1000});
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

    public canDeactivate(){
        this._ea.publish('toggleCurtains',{value:true, wait: 0});
        return true;
    }
}

