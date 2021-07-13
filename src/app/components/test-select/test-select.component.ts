import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, forwardRef, Input } from '@angular/core';
import selectItems from 'src/app/interfaces/selectItems.interface';

@Component({
  selector: 'app-test-select',
  templateUrl: './test-select.component.html',
  styleUrls: ['./test-select.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TestSelectComponent),
    multi: true
  }]
})
export class TestSelectComponent implements ControlValueAccessor {

  @Input() selectItems = [] as selectItems[];

  selectedValue!: any;


  constructor() {

  }

  onCheckChange(evt: any) {
    this.selectedValue = evt.target.value;

    console.log(`qvt: ${evt}`)
    console.log(`firstValue: ${this.selectedValue}`)
    this.onChange(this.selectedValue);
  }

  onChange(selectedValue: any) {};

  onTouched = () => {};

  writeValue(value: any): void {
    this.selectedValue = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }


}
