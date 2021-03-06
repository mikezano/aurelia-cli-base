import {bindable, autoinject} from 'aurelia-framework';
import * as Prism from 'prismjs'

@autoinject()
export class ComponentElement {
	@bindable file:string;
	public humanizeFile:string;
	public scss:string;
	public pug:string;
	public scssId:string = this.randomString(16);
	public pugId:string =  this.randomString(16);
	public nameId:string =  this.randomString(16);
	public scssElement: HTMLElement;
	public pugElement: HTMLElement;



	public attached(){
		this.humanize();
		this.getFile("GET", `src/components/${this.file}.scss`, (result)=>{
			this.scss = result;
			setTimeout(()=>{
				Prism.highlightElement(this.scssElement, false);
			}, 10);

		});
		this.getFile("GET", `src/components/${this.file}.pug`, (result)=>{
			this.pug = result;
			setTimeout(()=>{
				Prism.highlightElement(this.pugElement, false);
			}, 10);			
		})		
	}

	public getFile (method, url, done) {
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

	private randomString(length):string {
		var text = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
		for(var i = 0; i < length; i++) {
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		return text;
	}
}
