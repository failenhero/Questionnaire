import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import checkbox from 'src/app/interfaces/chekbox.interface';

@Component({
  selector: 'app-test-checkbox',
  templateUrl: './test-checkbox.component.html',
  styleUrls: ['./test-checkbox.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TestCheckboxComponent),
    multi: true
  }]
})
export class TestCheckboxComponent implements OnInit  {

  @Output() checkboxClickedEvent = new EventEmitter<checkbox[]>();

  @Input() optionsList = [] as checkbox[];

  optionCheckAll = {} as checkbox;

  selectAllText!: checkbox;

  constructor() {
  }

  onChange(_: any) {}


  ngOnInit(): void {
    this.defineSelectAllText();
  }


  onCheckChange(event: any) {

    if(event?.target?.checked) {

      const checkedOpts = this.optionsList.filter(option => option.checked === true);

      if(checkedOpts.length == this.optionsList.length) {
        this.optionCheckAll.checked = true
      }

    } else {

      this.optionCheckAll.checked = false;
    }

    this.checkboxClickedEvent.emit(this.optionsList.filter(option => option.checked === true))

  }

  defineSelectAllText() {
    this.selectAllText = {
      id: 0,
      text: 'Выбрать всё',
      checked: false
    }
  }

  selectAll(evt: any) {

    this.optionsList = this.optionsList.map(option => ({
      ...option,
      checked: evt?.target?.checked
    }))

    this.optionCheckAll.checked = evt?.target?.checked

    this.checkboxClickedEvent.emit(this.optionsList.filter(option => option.checked === true))

  }
}
