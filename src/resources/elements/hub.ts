import { autoinject, bindable } from 'aurelia-framework';
import {VelocityAnimator} from 'aurelia-animator-velocity';

@autoinject()
export class Hub {
  @bindable value;

  @bindable
  public container:HTMLElement;
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
    this.container.style.height = '10px';
    this.container.style.width = '10px';
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
    console.log(this.container);

    this.initialState();
    this.runSequence();
  }

  public runSequence(){
        var duration:number = 1000;
    var easeOut:number[] = [.04,1,.99,1];
    var easeIn:number[] = [.95,.03,.95,.04];
    this.velocity.runSequence([
      { e: this.leftCorner, p: { translateX: -300 }, o: { duration: 0} },
      { e: this.rightCorner, p: { translateX: 300 }, o: { duration: 0, sequenceQueue: false} },      
      //{ e: this.leftCurtain, p: { translateX: -500 }, o: { duration: 0, sequenceQueue: false} },      
      //{ e: this.rightCurtain, p: { translateX: 500 }, o: { duration: 0, sequenceQueue: false} },    
      { e: this.container, p: { width:600}, o: { duration: duration/4, easing: easeOut} },  
      { e: this.container, p: { height:400}, o: { duration: duration/2, easing: easeOut} },
      //{ e: this.leftCurtain, p: { translateX: 0 }, o: { duration: duration/2, sequenceQueue: false} },  
      //{ e: this.rightCurtain, p: { translateX: 0 }, o: { duration: duration/2, sequenceQueue: false} },  
      //{ e: this.container, p: { height: 400}, o: { duration: duration/2, easing: easeOut} },
      { e: this.leftCorner, p: { translateX: 0 }, o: { duration: duration/2, easing:easeOut} },
      { e: this.rightCorner, p: { translateX: 0 }, o: { duration: duration/2, easing:easeOut, sequenceQueue: false} },
      { e: this.leftCurtain, p: { translateX: -500, }, o: { duration: duration*2, easing: easeOut} },
      { e: this.rightCurtain, p: { translateX: 500 , }, o: { duration: duration*2, easing: easeOut, sequenceQueue: false } }
    ]);
  }
  valueChanged(newValue, oldValue) {

  }
}

