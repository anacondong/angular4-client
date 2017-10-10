import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RuleService {

  constructor(private http: Http) { }
  findAll() {
  	console.log('findAll start');
  	
    return this.http.get('/api/rule').map(res => res.json());
  }
  
  
}