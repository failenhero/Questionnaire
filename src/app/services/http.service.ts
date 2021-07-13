import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private readonly mainURL: string = 'http://localhost:4200/';

  constructor(
    private http: HttpClient
  ) { }

  postForm(form: Form) {
    return this.http.post(this.mainURL, form);
  }

  getForm(): Observable<Form> {
    return this.http.get<Form>(this.mainURL);
  }
}
