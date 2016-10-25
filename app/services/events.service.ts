import { Injectable } from "@angular/core";
import { Event } from "./../models/event.model";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable }  from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class EventsService {

  baseURLPort: string = "3000";
  baseURL: string = "http://cosasextraordinarias.com";
  baseUrlAPI: string = "";

  constructor(private _http: Http) {
    this.baseUrlAPI = `${this.baseURL}:${this.baseURLPort}`;
  }

  public getEvents(): Observable<Array<Event>> {
    let serviceURL: string = `${this.baseUrlAPI}/events`;

    return this._http.get(serviceURL).map((response: Response) => {
      // Fix the URL for images
      let items = response.json();
      items.forEach((event: Event) => {
        event.thumbnail = `${this.baseURL}/api-images/${event.thumbnail.replace("/img/", "")}`;
      });
      console.log("-- getEvents() > Response from external service: %o", items);
      return this.sortEventsById(items);
    });
  }

  // Sort items by id (most recent at the beginning)
  public sortEventsById(items: Array<Event>, direction = "desc") {

    let sortedItems = _.sortBy(items, [function (item: Event) {
      return parseInt(item.id, 10);
    }]);

    if (direction.toLowerCase() === "desc") {
      return sortedItems.reverse();
    }
    return sortedItems;
  }

  public createEvent(event: Event): Observable<Response> {
    let serviceURL: string = `${this.baseUrlAPI}/events`;

    // let bodyString = JSON.stringify(event); // Stringify payload
    let headers = new Headers({'Content-Type': 'application/json'}); // Set content type to JSON
    let options = new RequestOptions({headers: headers}); // Create a request option

    console.log(">> createEvent()", event);
    return this._http.post(serviceURL, event, options).map((response: Response) => {
      return response.json();
    }).catch((error: any) => Observable.throw(error.json().error || 'Server error')); // Errors if any

  }
}
