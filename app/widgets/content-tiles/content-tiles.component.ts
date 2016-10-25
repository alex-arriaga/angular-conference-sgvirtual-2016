import { Component, OnInit } from "@angular/core";
import { Event as EventItem } from "./../../models/event.model";
import { EventsService } from "./../../services/events.service";

@Component({
  moduleId: module.id,
  selector: "app-content-tiles",
  templateUrl: "content-tiles.component.html",
  styleUrls: ["content-tiles.component.css"]
})
export class ContentTilesComponent implements OnInit {
  events: Array<EventItem> = [];

  constructor(private _eventsService: EventsService) {

  }

  public ngOnInit() {
    this.getEvents();
  }

  // Don't confuse the $event with OUR class/model "EventItem"
  // $event is a regular ECMAScript "Event"
  public onCreateEvent(event: Event) {
    event.preventDefault();

    let newEventItem: EventItem = {
      topics: "sports",
      thumbnail: "/img/s-1.jpeg",
      url: "index.html",
      title: "Example of an event created programatically",
      summary: "Georgetown at Butler. Georgetown's D'Vauntes Smith-Rivera squares off with Butler's Kellen Dunham in a battle of senior guards. The Hoyas took two of three meetings with the Bulldogs last season."
    };

    this._eventsService.createEvent(newEventItem).subscribe(data => {
      this.getEvents();
    }, err => {
      console.error(err);
    }, () => {

    });

  }

  public getEvents() {
    this._eventsService.getEvents().subscribe((data) => {
        this.events = data;
      },
      error => {
        console.error(error);
      },
      () => {
        console.info("<< this._eventsService.getEvents() < Finished");
      }
    );
  }
}
