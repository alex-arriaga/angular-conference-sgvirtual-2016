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
