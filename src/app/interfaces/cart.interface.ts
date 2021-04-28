import { Dictionary } from './dictionary.interface';
import { Product } from './product.interface';

export interface CartItem {
    product: Product;
    quantity: number;
}

export interface Cart extends Dictionary<CartItem> {}
