import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TestInputComponent } from './components/test-input/test-input.component';
import { TestSelectComponent } from './components/test-select/test-select.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { TestCheckboxComponent } from './components/test-checkbox/test-checkbox.component';
import { TestNumberComponent } from './components/test-number/test-number.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    TestInputComponent,
    TestSelectComponent,
    QuestionnaireComponent,
    TestCheckboxComponent,
    TestNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule,
    MatIconModule,
    MatButtonModule
  ],
  entryComponents: [
    TestInputComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
