import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/product.service';
import { Product } from './models/product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  //imports : 外部のAngularモジュール。HttpモジュールやUIモジュール
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  public title = 'tutorial';
  // ProductServiceをコンポーネントに注入
  private productService = inject(ProductService);
  public isCarVisible: boolean = false;
  public cartItems: Product[] = [];
  // 商品情報の購読 (クロスコンポーネントでのイベントの発行と購読)
  private addToCartSubscription: Subscription;

  constructor() {
    // 購読 (subscribe) 
    this.addToCartSubscription = this.productService.onAddToCart$.subscribe((res: Product) => {
      this.cartItems.unshift(res);
    });
  }

  // コンポーネントの初期化と後始末はそれぞれ ngOnInit と ngOnDestroy
  // コンポーネント内でサブスクライブしたら、コンポーネントが破棄されるタイミングで、購読終了 (unsubscribe) 
  public ngOnDestroy(): void {
    if (this.addToCartSubscription) {
      this.addToCartSubscription.unsubscribe();
    }
  }

  public showCart(): void {
    this.isCarVisible = !this.isCarVisible;
  }

  public trackByIndex(index: number, item: Product): number {
    return index;
  }

  // 削除処理
  public removeProduct(index: number): void {
    this.cartItems.splice(index, 1)
  }

  public getTotalQuantity(): number {
    return this.cartItems.length;
  }

  public getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + Number(item.price), 0);
  }
}