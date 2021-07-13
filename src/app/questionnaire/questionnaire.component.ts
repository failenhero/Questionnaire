import { HttpService } from './../services/http.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import checkbox from '../interfaces/chekbox.interface';
import selectItems from '../interfaces/selectItems.interface';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})

export class QuestionnaireComponent implements OnInit {

  familyStates = [] as selectItems[];
  birthPlaces = [] as selectItems[]
  abilities = [] as checkbox[];

  renewedAbilities = [] as checkbox[];

  questionnaireForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {
    this.setSelection();
    this.setAbilities();
    this.initiateForm();
  }


  setSelection() {
    this.familyStates = [
      {id: 1, text: 'Не женат/не замужем'},
      {id: 2, text: 'Женат/замужем'}
    ];
    this.birthPlaces = [
      {id: 1, text: 'Не важно'},
      {id: 2, text: 'Астрахань'},
      {id: 3, text: 'Волгоград'},
      {id: 4, text: 'Волжский'},
      {id: 5, text: 'Ростов-на-Дону'},
      {id: 6, text: 'Саратов'},
      {id: 7, text: 'Элиста'}
    ];
  }

  setAbilities() {
    this.abilities = [
      {id: 1, text: 'Общение', checked: false},
      {id: 2, text: 'Иностранные языки', checked: false},
      {id: 3, text: 'Бег с препятствиями', checked: false},
      {id: 4, text: 'Быстрое чтение', checked: false},
      {id: 5, text: 'Самозащита', checked: false},
      {id: 6, text: 'Вождение', checked: false},
      {id: 7, text: 'Программирование', checked: false},
      {id: 8, text: 'Управление вертолётом', checked: false},
      {id: 9, text: 'Оперное пение', checked: false}
    ]
  }

  checkboxRenewed(renewedOpts: checkbox[]) {

    this.renewedAbilities = renewedOpts;

  }

  initiateForm() {
    this.questionnaireForm = this.formBuilder.group({
      name: ['',
        Validators.required
      ],

      age: ['',
        Validators.required
      ],

      familyState: [this.familyStates[0].text,
        Validators.required
      ],

      universities: this.formBuilder.array([
        new FormControl('')
      ]),

      birthPlace: [this.birthPlaces[0].text,
        Validators.required
      ],

      checkedAbilitys: this.formBuilder.array([])

    });
  }

  getUniversities(): FormArray {
    return this.questionnaireForm.controls['universities'] as FormArray
  }

  addUniversity() {
    (<FormArray>this.questionnaireForm.controls['universities']).push(new FormControl(''))
  }

  removeUniversity(i: number) {
    (<FormArray>this.questionnaireForm.controls['universities']).removeAt(i);
  }

  submitForm() {
    let checkedAbilitys: FormArray = this.questionnaireForm.get('checkedAbilitys') as FormArray;

    for(let i = 0; i <= checkedAbilitys.length; i++) {
      checkedAbilitys.removeAt(i-1);
    }

    this.renewedAbilities.forEach(opt => {
      checkedAbilitys.push(new FormControl(opt))
    });

    console.log(this.questionnaireForm.value)

    // sending form
    this.httpService.postForm(this.questionnaireForm.value).subscribe(res => {
      console.log(res)
    }, error => {
      console.log(error)
    });

    this.questionnaireForm.reset();
    this.setAbilities();
    this.setSelection();
  }


}
