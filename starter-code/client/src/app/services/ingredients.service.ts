import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// import 'rxjs/add/operator/map';


@Injectable()
export class IngredientsService {

  BASE_URL: String = 'http://localhost:3000';
  constructor(private http: Http) { }

  getList() {
    return this.http.get(`${this.BASE_URL}/api/ingredients`)
      .map(res => res.json());
  }
}
