import { Injectable } from '@angular/core';
import { Category } from '@enums/category.enum';
import { Dictionary } from '@interfaces/dictionary.interface';
import { Product } from '@interfaces/product.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Dictionary<Product> = {
    1: {
      id: '1',
      title: 'Cup "Bears"',
      description: 'Cup with bears draw on it.',
      category: Category.CUPS,
      price: 5.99,
      isAvailable: true,
      tags: ['cup', 'bear', 'bears', 'drawing']
    },
    2: {
      id: '2',
      title: 'Mug "Bears"',
      description: 'Mug with bears draw on it.',
      category: Category.MUGS,
      price: 6.99,
      isAvailable: true,
      tags: ['mug', 'bear', 'bears', 'drawing']
    },
    3: {
      id: '3',
      title: 'Plate "Bears"',
      description: 'Plate with bears draw on it.',
      category: Category.PLATES,
      price: 9.99,
      isAvailable: true,
      tags: ['plate', 'bear', 'bears', 'drawing']
    },
    4: {
      id: '4',
      title: 'Teapot "Bears"',
      description: 'Teapot with bears draw on it.',
      category: Category.TEAPOTS,
      price: 14.99,
      isAvailable: true,
      tags: ['teapot', 'bear', 'bears', 'drawing']
    },
  };

  getProducts(): Observable<Product[]> {
    return of(Object.values(this.products));
  }

  buyProduct(product: Product): void {
    this.products[product.id].isAvailable = false;
  }
}
