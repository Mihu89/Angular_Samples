import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle = 'Product List';
  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];
  showImage: boolean = false;
  imageWidth: number = 50;
  imageMargin: number = 10;
  constructor() { }

  ngOnInit(): void {
  }

}
