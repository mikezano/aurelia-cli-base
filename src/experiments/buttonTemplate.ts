import {bindable, autoinject} from 'aurelia-framework';

@autoinject()
export class ButtonTemplate {
	@bindable file:string;
}
