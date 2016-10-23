import { Component, OnInit } from "@angular/core";
import { Event as EventItem } from "./../../models/event.model";
@Component({
  moduleId: module.id,
  selector: "app-content-tiles",
  templateUrl: "content-tiles.component.html",
  styleUrls: ["content-tiles.component.css"]
})
export class ContentTilesComponent implements OnInit {
  events: Array<EventItem> = [];

  constructor() {

  }

  public ngOnInit() {
    this.events = this.getEvents();
  }

  public getEvents(): Array<EventItem> {
    return this.events = [
      {
        id: "8",
        topics: "technics",
        thumbnail: "/img/t-5.jpeg",
        url: "index.html",
        title: "Tech 1",
        summary: "Ut enim ad minim veniam",
        other: "Extra"
      }
    ];
  }
}
