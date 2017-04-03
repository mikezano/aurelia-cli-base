import {bindable, autoinject} from 'aurelia-framework';

@autoinject()
export class ButtonSample {

	@bindable content:string;
	@bindable tree:string;

	constructor(){}

	public attached():void{
		console.log(this.tree);
		console.log(this.content);
	}
}
