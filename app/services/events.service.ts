import { Injectable } from "@angular/core";
import { Event } from "./../models/event.model";

@Injectable()
export class EventsService {

  constructor() {

  }

  public getEvents(): Array<Event> {
    return [
      {
        id: "8",
        topics: "technics",
        thumbnail: "/img/t-5.jpeg",
        url: "index.html",
        title: "Tech 1",
        summary: "Ut enim ad minim veniam",
        other: "Extra"
      }, {
        id: "9",
        topics: "transport",
        thumbnail: "/img/tr-1.jpeg",
        url: "index.html",
        title: "Autonomous Cars Silicon Valley 2016",
        summary: "he Newest Tools, Technologies, and Techniques required for the Pursuit of the Autonomous Passenger Vehicle."
      }
    ];
  }
}
