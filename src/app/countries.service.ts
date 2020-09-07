import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
     constructor(private http :HttpClient) { }
       getUsers():Observable<object>{
     return this.http.get("https://restcountries.eu/rest/v2/all");
  }
}
