import {inject} from 'aurelia-dependency-injection';
import {Project, ProjectItem, CLIOptions, UI} from 'aurelia-cli';

@inject(Project, CLIOptions, UI)
export default class ElementGenerator {
  constructor(private project: Project, private options: CLIOptions, private ui: UI) { }

  execute() {
    return this.ui
      .ensureAnswer(this.options.args[0], 'What would you like to call the custom element?')
      .then(name => {
        //let fileName = this.project.makeFileName(name);
        let fileName = name;
        let className = this.project.makeClassName(name);

        this.project.elements.add(
          ProjectItem.text(`${fileName}.ts`, this.generateJSSource(className)),
          ProjectItem.text(`${fileName}.pug`, this.generatePugSource(className)),
          ProjectItem.text(`${fileName}.scss`, this.generateScssSource(className))
        );

        return this.project.commitChanges()
          .then(() => this.ui.log(`Created ${fileName}.`));
      });
  }

  generateScssSource(className){
    return `.${this.dasherize(className)}{}`;
  }

  generateJSSource(className) {
return `import {bindable, autoinject} from 'aurelia-framework';

@autoinject()
export class ${className} {
  public attached(){}
}
`
  }

  generatePugSource(className) {
return `template
  require(from="./${className}")
    .${this.dasherize(className)}
`
  }

 dasherize(text){
       return text.replace(/[A-Z]/g, function(char, index) {
      return (index !== 0 ? '-' : '') + char.toLowerCase();
    });
 }  
}

