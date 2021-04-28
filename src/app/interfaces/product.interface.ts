import { Category } from '@enums/category.enum';

export interface Product {
    id: string;
    title: string;
    description: string;
    category: Category;
    price: number;
    isAvailable: boolean;
    tags: string[];
}
