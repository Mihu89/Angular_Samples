import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product.model';
import { ProductService } from '../product.service';
import { HttpClient } from '@angular/common/http';

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
  imageMargin: number = 5;
  errorMessage = '';

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }
  constructor(private productService: ProductService, 
              private http: HttpClient) { }

  ngOnInit(): void {
    console.log('Start');
    // this.productService.getProducts().subscribe({
    //   next: products => {
    //     this.products = products;
    //     console.log('products: ' + this.products);
    //     this.filteredProducts = this.products;
    //   },
    //   error : err => this.errorMessage = err
    // });
    this.http.get("assets/products.json").subscribe(
      (data : IProduct[]) => {
        console.log(JSON.stringify(data));
        this.products = data;
            this.filteredProducts = this.products;
      }
    )
 }

performFilter(filterBy: string): IProduct[] {
  filterBy = filterBy.toLocaleLowerCase();
  return this.products.filter((product: IProduct) =>
    product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
}

onRatingClicked(message: string): void {
  this.pageTitle = 'Product List ' + message;
}

toggleImage(){
  this.showImage = !this.showImage;
}
}
