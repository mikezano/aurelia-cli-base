import { autoinject, bindable } from 'aurelia-framework';
import {VelocityAnimator} from 'aurelia-animator-velocity';

@autoinject()
export class Hub {
  @bindable value;

  @bindable
  public container:HTMLElement;
  public velocity:VelocityAnimator;

  constructor(velocity:VelocityAnimator){
    this.velocity = velocity;

  }

  public attached(){
    console.log(this.container);
    this.velocity.runSequence([
      { e: this.container, p: { translateX: 100 }, o: { duration: 1000 } },
      { e: this.container, p: { translateX: 200 }, o: { duration: 1000 } },
      { e: this.container, p: { translateX: 300 }, o: { duration: 1000 } }
    ]);
  }

  valueChanged(newValue, oldValue) {

  }
}

