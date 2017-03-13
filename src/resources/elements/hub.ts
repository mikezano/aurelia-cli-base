import { autoinject, bindable } from 'aurelia-framework';
import {VelocityAnimator} from 'aurelia-animator-velocity';
import {Router, RouterConfiguration} from 'aurelia-router';
import {EventAggregator} from 'aurelia-event-aggregator';

@autoinject()
export class Hub {

  public static duration:number = 1000;
  public static  easeOut:number[] = [.2,1,.8,.95];
  public static  easeOutInverse:number[] = [.62,.03,.93,.45];

  public toggleCurtain:boolean = false; 



  

  @bindable
  public containerContent:HTMLElement;
  @bindable
  public leftCurtain:HTMLElement;
  @bindable
  public rightCurtain:HTMLElement;
  @bindable
  public leftCorner:HTMLElement;
  @bindable
  public rightCorner:HTMLElement;
  @bindable
  public router:Router;

  public velocity:VelocityAnimator;
  public ea:EventAggregator;
  public firstTime:boolean = true;

  constructor(velocity:VelocityAnimator, ea:EventAggregator){
    this.velocity = velocity;
    this.ea = ea;

    this.ea.subscribe('toggleCurtains', (data:any)=>{
        if(this.firstTime != true)
          this.curtainAnimate(data.value, data.wait);
        this.firstTime = false;
    });    
  }

  public initialState(){
    this.containerContent.style.height = '10px';
    this.leftCorner.style.transform = "translateX(-300px)";
    this.rightCorner.style.transform = "translateX(300px)";
  }

  public attached(){
    this.initialState();
    this.runSequence();
  }

  public runSequence(){

    this.velocity.runSequence([
      { e: this.leftCorner, p: { translateX: -300 }, o: { duration: 0} },
      { e: this.rightCorner, p: { translateX: 300 }, o: { duration: 0, sequenceQueue: false} },         
      //{ e: this.containerContent, p: { width:600}, o: { duration: duration/3, easing: easeOut} },  
      { e: this.containerContent, p: { height:400}, o: { duration: Hub.duration/2.5, easing: Hub.easeOut} },
      //{ e: this.containerCurtains, p: { height:400}, o: { duration: duration/2.5, easing: easeOut, sequenceQueue: false} },
      { e: this.leftCorner, p: { translateX: 0 }, o: { duration: Hub.duration/2, easing:Hub.easeOut} },
      { e: this.rightCorner, p: { translateX: 0 }, o: { duration: Hub.duration/2, easing:Hub.easeOut, sequenceQueue: false} },
      { e: this.leftCurtain, p: { translateX: -500 }, o: { duration: Hub.duration*1.5, easing: Hub.easeOut} },
      { e: this.rightCurtain, p: { translateX: 500 }, o: { duration: Hub.duration*1.5, easing: Hub.easeOut, sequenceQueue: false } }
    ]);
  }

  public curtainAnimate(value:boolean, wait:number = 0):void{

    this.toggleCurtain = value;

    this.velocity.runSequence([
      { e: this.leftCurtain, 
        p: { translateX: this.toggleCurtain? 0: -500 }, 
        o: { duration: Hub.duration/(this.toggleCurtain?2:1), easing: Hub.easeOut } },
      { e: this.rightCurtain, 
        p: { translateX: this.toggleCurtain? 0: 500 }, 
        o: { duration: Hub.duration/(this.toggleCurtain?2:1), easing: Hub.easeOut, sequenceQueue: false } }
    ]);

    // this.ea.publish('finished-animating-curtain');
  }


}

