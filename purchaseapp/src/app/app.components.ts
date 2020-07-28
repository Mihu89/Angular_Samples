import {Component} from '@angular/core';
import { Item } from './item';

@Component({
    selector: 'purchase-app',
    template: `<div class="panel">
    <div class="form-inline">
        <div class="form-group">
            <div class="col-md-8">
                <input class="form-control" [(ngModel)]="text" placeholder="Name of product to buy" />
            </div>
        </div>
        <div class="form-group">
            <div class="col-md-6">
                <input type="number" class="form-control" [(ngModel)]="price" placeholder="Price of product to buy" />
            </div>
        </div>
        <div class="form-group">
            <div class="col-md-offset-2 col-md-8">
                <button class="btn btn-default" (click)="addItem(text, price)">Add product</button>
            </div>
        </div>
    </div>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Name of Product</th>
                <th>Price</th>
                <th>Is bought</th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let item of items">
                <td>{{item.purchase}}</td>
                <td>{{item.price}}</td>
                <td><input type="checkbox" [(ngModel)]="item.done"></td>
            </tr>
        </tbody>
    </table>
</div>`
})
export class AppComponent {
    text: string;
    price: number = 0;

    items: Item[] =[
        {
            purchase: "Bread", price:5.20, done: false
        },
        {
            purchase: "Butter", price:25.50, done: false
        },
        {
            purchase: "Carrot", price:15.00, done: true
        },
        {
            purchase: "Milk", price:15.80, done: false
        }
    ];

    addItem(text: string, price: number): void {

        if (text == null || text.trim() == "" || price == null ){
            return;
        }
        this.items.push(new Item(price, text));
    }
}