import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartItem } from '@interfaces/cart.interface';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  cartItems: CartItem[] = [];

  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private readonly cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartService.getItems()
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe((items) => {
        this.cartItems = items;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
