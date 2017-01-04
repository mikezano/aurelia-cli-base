import {bindable} from 'aurelia-framework';

export class Hub {
  @bindable value;

  valueChanged(newValue, oldValue) {

  }
}

