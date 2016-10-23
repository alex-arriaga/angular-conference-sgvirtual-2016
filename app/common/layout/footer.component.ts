import { Component } from "@angular/core";
@Component({
  moduleId: module.id,
  selector: "app-footer",
  templateUrl: "footer.component.html",
  styles: [
    `
      footer {
        background-color: #efefef;
        min-height: 50px;
        padding: 2em 0;
        margin-top: 2em;
      }
    `
  ]
})
export class FooterComponent {

}
