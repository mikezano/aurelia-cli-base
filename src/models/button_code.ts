//https://github.com/aurelia/cli/issues/300

//import * as data from 'text!data.json';
export class ButtonCodeModel{



  public title:string = "Title";
  public className:string = "ClassName";
  public code: string = "Code";

  constructor(styleName:string){
    //const json = data;
   
    this.code = styleName;
    //console.log(data.name);
    this.readFile("scripts/data.json");
  }

  public readFile(file:string){
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
      if(rawFile.readyState === 4)
      {
        if(rawFile.status === 200 || rawFile.status == 0)
        {
          debugger;
          var allText = rawFile.responseText;
          alert(allText);
        }
      }
    }
    rawFile.send(null);   
  }
}