import {bindable} from 'aurelia-framework';
import {ButtonCodeModel} from '../../models/button_code';

export class ButtonCode {
  @bindable value;

  @bindable model:ButtonCodeModel;

  valueChanged(newValue, oldValue) {

  }
}

