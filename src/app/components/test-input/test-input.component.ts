import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-test-input',
  templateUrl: './test-input.component.html',
  styleUrls: ['./test-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TestInputComponent),
    multi: true
  }]
})

export class TestInputComponent implements ControlValueAccessor {

  @Input() removable!: boolean;
  @Input() placeholder: string = '';
  @Input() requiredField = false;

  touched = false;

  private _value = '';

  get value() {
   return this._value;
  }

  @Input()
  set value(val) {
   this._value = val;
   this.onChange(this._value);
  }

  constructor() {
  }

  onChange(_: any) {}

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  onClicked() {
    this.touched = true;
  }

}

