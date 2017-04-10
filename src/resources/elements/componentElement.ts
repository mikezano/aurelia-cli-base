import {bindable, autoinject} from 'aurelia-framework';

@autoinject()
export class ComponentElement {
	@bindable file:string;
	public humanizeFile:string;
	public scss:string;

	public attached(){
		this.humanize();
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

	public humanize(){

		this.humanizeFile = this.file
			.match(/^[a-z]+|[A-Z][a-z]*/g).map(function(x){
        		return x[0].toUpperCase() + x.substr(1).toLowerCase();
    		})
			.join(' ');
	}

}
