import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeaderComponent } from "./common/layout/header.component";
import { FooterComponent } from "./common/layout/footer.component";
import { ContentTilesComponent } from "./widgets/content-tiles/content-tiles.component";

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, HeaderComponent, FooterComponent, ContentTilesComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
