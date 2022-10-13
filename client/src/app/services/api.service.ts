import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private PATH: string = "http://localhost:8080/";
  constructor(private http: HttpClient) {
    console.log("api service run!");

  }
  
  /* get all styles */
  public getStyles() {
    return this.http.get<any>(this.PATH + 'style/all');
  }
  
  /* get all Tests */
  public getTests() {
    return this.http.get<any>(this.PATH + 'test/all');
  }

  /* post Test */
  public saveTest(email: string, style: string){
    console.log(email);
    console.log(style);
    
    return this.http.post<any>(this.PATH + 'test/',{
      email: email,
      style: style
    });
  }
}
