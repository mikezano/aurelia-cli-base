import { autoinject, bindable } from 'aurelia-framework';
import {VelocityAnimator} from 'aurelia-animator-velocity';

@autoinject()
export class Hub {
  @bindable value;

  @bindable
  public containerContent:HTMLElement;
  @bindable
  public containerCurtains:HTMLElement;
  @bindable
  public leftCurtain:HTMLElement;
  @bindable
  public rightCurtain:HTMLElement;
  @bindable
  public leftCorner:HTMLElement;
  @bindable
  public rightCorner:HTMLElement;

  public velocity:VelocityAnimator;

  constructor(velocity:VelocityAnimator){
    this.velocity = velocity;

  }

  public initialState(){
    this.containerContent.style.height = '10px';
    //this.containerContent.style.width = '300px';
    this.containerCurtains.style.height = '10px';
    this.leftCorner.style.transform = "translateX(-300px)";
    this.rightCorner.style.transform = "translateX(300px)";
    //this.leftCorner.style.display = "none";
    //this.rightCorner.style.display = "none";    
    //this.leftCorner.style.left = "-300px";
    //this.leftCorner.style.marginLeft = "-300px";
    //this.leftCorner.style.transform= "translateY(300px)";
    //this.leftCorner.style.top= "400px";
  }
  public attached(){
    console.log(this.containerContent);

    this.initialState();
    this.runSequence();
  }

  public runSequence(){
        var duration:number = 1000;
    //var easeOut:number[] = [0.19, 0.92, 0.23, 1];
    var easeOut:number[] = [.2,1,.8,.95];
    var easeIn:number[] = [.95,.03,.95,.04];
    this.velocity.runSequence([
      { e: this.leftCorner, p: { translateX: -300 }, o: { duration: 0} },
      { e: this.rightCorner, p: { translateX: 300 }, o: { duration: 0, sequenceQueue: false} },         
      //{ e: this.containerContent, p: { width:600}, o: { duration: duration/3, easing: easeOut} },  
      { e: this.containerContent, p: { height:400}, o: { duration: duration/2.5, easing: easeOut} },
      { e: this.containerCurtains, p: { height:400}, o: { duration: duration/2.5, easing: easeOut, sequenceQueue: false} },
      { e: this.leftCorner, p: { translateX: 0 }, o: { duration: duration/2.5, easing:easeOut} },
      { e: this.rightCorner, p: { translateX: 0 }, o: { duration: duration/2.5, easing:easeOut, sequenceQueue: false} },
      { e: this.leftCurtain, p: { translateX: -500 }, o: { duration: duration*2, easing: easeOut} },
      { e: this.rightCurtain, p: { translateX: 500 }, o: { duration: duration*2, easing: easeOut, sequenceQueue: false } }
    ]);
  }
  valueChanged(newValue, oldValue) {

  }
}

