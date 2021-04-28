import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '@interfaces/product.interface';
import { Observable, Subject } from 'rxjs';
import { CartService } from 'src/app/cart/services/cart.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(
    private readonly productsService: ProductsService,
    private readonly cartService: CartService
  ) { }

  ngOnInit(): void {
    this.products$ = this.productsService.getProducts();
  }

  buyProduct(product: Product): void {
    this.cartService.buyProduct(product);
  }
}
