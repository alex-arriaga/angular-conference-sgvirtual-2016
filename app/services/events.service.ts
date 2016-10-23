import { Injectable } from "@angular/core";
import { Event } from "./../models/event.model";
import { Http, Response } from "@angular/http";
import { Observable }  from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class EventsService {

  baseURLPort: string = "3000";
  baseURL: string = "http://cosasextraordinarias.com";

  constructor(private _http: Http) {
    this.baseURL = `${this.baseURL}:${this.baseURLPort}`;
  }

  public getEvents(): Observable<Array<Event>> {
    let serviceURL: string = `${this.baseURL}/events`;
    console.log(serviceURL);
    return this._http.get(serviceURL).map((response: Response) => {
      console.log("-- getEvents() > Response from external service: %o", response.json());
      return response.json();
    });
  }
}
