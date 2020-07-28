import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<label>Write your user name</label>
    <input type="text" placeholder="name" [(ngModel)]="name">
    <h1 style="background-color: green;">Hello {{name}} !</h1>`
})
export class AppComponent {
    name: string;
}