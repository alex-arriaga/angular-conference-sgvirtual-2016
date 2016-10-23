import { Injectable } from "@angular/core";
import { Event } from "./../models/event.model";
import { Http, Response } from "@angular/http";
import { Observable }  from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class EventsService {

  baseURLPort: string = "3000";
  baseURL: string = "http://cosasextraordinarias.com";
  baseUrlAPI : string = "";

  constructor(private _http: Http) {
    this.baseUrlAPI = `${this.baseURL}:${this.baseURLPort}`;
  }

  public getEvents(): Observable<Array<Event>> {
    let serviceURL: string = `${this.baseUrlAPI}/events`;

    return this._http.get(serviceURL).map((response: Response) => {
      // Fix the URL for images
      let items = response.json();
      items.forEach((event : Event) => {
        event.thumbnail = `${this.baseURL}/api-images/${event.thumbnail.replace("/img/", "")}`;
      });
      console.log("-- getEvents() > Response from external service: %o", items);
      return items;
    });
  }
}
