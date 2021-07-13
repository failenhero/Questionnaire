import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-test-number',
  templateUrl: './test-number.component.html',
  styleUrls: ['./test-number.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TestNumberComponent),
    multi: true
  }]
})
export class TestNumberComponent implements ControlValueAccessor {

  private _value: any = null;

  @Input() requiredField = false;

  touched = false;

  get value() {
   return this._value;
  }

  @Input()
  set value(val) {
   this._value = val;
   this.onChange(this._value);
  }

  constructor() { }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  onChange(_: any) {}

  up() {
    if(this.value == undefined) {
      return this.value = 1;
    }
    if(this.value >= 100){
      return this.value = 100;
    }

    return this.value++

  }

  down() {
    if(this.value == undefined) {
      return this.value = 100;
    }
    if(this.value <= 1){
      return this.value = 1;
    }

    return this.value--
  }

  onClicked() {
    this.touched = true;
  }

}
