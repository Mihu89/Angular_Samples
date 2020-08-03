import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { IProduct } from './product.model';
import {map, tap, catchError} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productApiUrl ='api/products/products.json';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]>{
    console.log(' getProducts()');
    return this.http.get<IProduct[]>(this.productApiUrl)
      .pipe(
        tap(data => console.log('All products: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
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
