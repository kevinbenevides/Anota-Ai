import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICardBody } from '../data';

@Injectable()

export class CardListService {
  readonly apiUrl : string

  constructor(private _http: HttpClient) {
    this.apiUrl = 'http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaws.com';
  }

  public getCardList(): Observable<ICardBody[]> {
    try{
      return this._http.get<ICardBody[]>(`${this.apiUrl}/cardlist.json`)
    } catch (error) {
      throw new Error();
    }
  }
}
