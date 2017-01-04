import {bindable} from 'aurelia-framework';
import {VelocityAnimator} from 'aurelia-animator-velocity';

export class Hub {
  @bindable value;

  valueChanged(newValue, oldValue) {

  }
}

