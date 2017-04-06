import {bindable, autoinject} from 'aurelia-framework';

@autoinject()
export class ButtonTemplate {
	@bindable file:string;
	public scss:string;

	public attached(){
		this.getScss("GET", `src/components/${this.file}.scss`, (result)=>{
			this.scss = result;
		})
	}

	public getScss (method, url, done) {
		var xhr = new XMLHttpRequest();
		xhr.open(method, url);
		xhr.onload = function () {
			done(xhr.response);
		};
		xhr.send();
	}
}
