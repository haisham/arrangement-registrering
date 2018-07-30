import {Injectable} from '@angular/core';
import { Component } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class EventService{

  constructor(private _http: Http){
    console.log("Service is ready!");

  }
  closeResult: string;

  //retrieve all available events
  getEvents(){
    return this._http
               .get("http://35.162.97.188/api/events", {})
               .map(res => res.json())
  }

  saveUser(userData){
    var headers = new Headers();
    headers.append('Content-type','application/json');
    return this._http
               .post('http://35.162.97.188/api/register-user', JSON.stringify(userData),{headers:headers})
               .map(res => res.json())
  }

  getRegistrationsOverview(Event){
    return this._http
               .get("http://35.162.97.188/api/registrations-overview/"+Event.id, {})
               .map(res => res.json())
  }
  getMoreEvents(id){
    return this._http
                .get('/api/events?page='+ id)
                .map(res => res.json())
  }



}
