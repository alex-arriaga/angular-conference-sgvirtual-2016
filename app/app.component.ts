import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <app-header></app-header>
        <app-content-tiles></app-content-tiles>
        <app-footer></app-footer>
    `
})
export class AppComponent { }
