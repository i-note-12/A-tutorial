import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../models/product.model';

// ルートインジェクターに提供、すべてのクラスで利用にする
@Injectable({
  providedIn: 'root'
})
export class ProductService {
// Productのパラメータを渡す
  public onAddToCart$: Subject<Product> = new Subject();
}
