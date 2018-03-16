
import { Injectable} from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import {Headers, RequestOptions} from '@angular/http';
import { AppSettings } from './../../appSettings';

@Injectable()
export class CategoryService {
  constructor(private httpClient: HttpClient) { }
  
  getCategorys(){
	 return this.httpClient.get("assets/json/product");
  }
}   
