import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { IProduct } from './product.model';
import {map, tap, catchError} from 'rxjs/operators';
import { Observable, throwError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productApiUrl ='api/products/products.json';
  productsItems: IProduct[];

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    console.log(' getProducts()');

    this.http.get("assets/products.json").subscribe(
      (data : IProduct[]) => {
        console.log(JSON.stringify(data));
        this.productsItems = data;
      }
    )
    // return this.http.get<IProduct[]>(this.productApiUrl, options)
    //   .pipe(
    //     tap(data => console.log('All products: ' + JSON.stringify(data))),
    //     catchError(this.handleError)
    //   );

    return of(this.productsItems);
  }

  getProduct(id: number): Observable<IProduct>{
    return this.getProducts().pipe(
      map((products: IProduct[]) => products.find(x => x.productId === id))
    );
  }

  private handleError(err: HttpErrorResponse){
    let errorMessage ='';
    if (err.error instanceof ErrorEvent){
      errorMessage='An error apeared:' + err.error.message;
    }else{
      errorMessage = ` Serrver error ${err.status} error message is : ${err.message} `;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
