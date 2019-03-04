import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMenu } from '../models/menu';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private _url: string = "/assets/json/menu-structure.json";

  constructor(private http: HttpClient) { }

  getMenus(): Observable<IMenu[]>{
    return this.http.get<IMenu[]>(this._url);
  }
}
