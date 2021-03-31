import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllService {

  constructor(private http:HttpClient) { }

  public dosignup(signup:any){
    return this.http.post("",signup)
  }
}
