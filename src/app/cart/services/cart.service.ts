import { Injectable } from '@angular/core';
import { Cart, CartItem } from '@interfaces/cart.interface';
import { Product } from '@interfaces/product.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = {};

  getItems(): Observable<CartItem[]> {
    return of(Object.values(this.cart));
  }

  buyProduct(product: Product): void {
    if (this.cart[product.id]) {
      this.cart[product.id].quantity += 1;
    } else {
      this.cart[product.id] = {
        product,
        quantity: 1
      };
    }
  }

  buyOneMoreProduct(product: Product): void {
    this.cart[product.id].quantity += 1;
  }

  buyOneLessProduct(product: Product): void {
    const isLastItem = this.cart[product.id].quantity === 1;
    if (isLastItem) {
      delete this.cart[product.id];
    } else {
      this.cart[product.id].quantity -= 1;
    }
  }

  getTotalSum(): number {
    return Object.values(this.cart).reduce((acc, cartItem) => {
      return acc + cartItem.quantity * cartItem.product.price;
    }, 0);
  }
}
