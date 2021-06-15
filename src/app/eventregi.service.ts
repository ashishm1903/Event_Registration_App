import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { tap } from 'rxjs/operators'; 
import { Router } from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class EventregiService {
  originUrl:string="http://localhost:4200"
  url="http://localhost:3000/Eventlist"
  studurl="http://localhost:3000/Registeruser"
  login="http://localhost:3000/login"
  
  configData:any=[];
  constructor(private http:HttpClient,private rout:Router) { }
  getEventList()
  {
    return this.http.get(this.url)
  }
  getEventListforregistration(id)
  {
    return this.http.get(this.url+'/'+id)
  }
  savestudent(data)
  {
    return this.http.post(this.studurl,data)
  }
  loginuser()
  {
    return this.http.get(this.login)
  }
  loadConfigurationData(): Promise<any> {
    return this.http.get<any>(`${this.originUrl}/assets/app.config.json`)
    .pipe(tap(result => {
      this.configData = result;
    }))
    .toPromise();
  }
  logout()
  {
    sessionStorage.clear()
    this.rout.navigate['/']

  }
}
