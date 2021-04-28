import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Category } from 'src/app/enums/category.enum';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirstComponent {
  @Input() name: string;
  @Input() description: string;
  @Input() price: number;
  @Input() category: Category;
  @Input() isAvailable: boolean;
  @Input() tags: string[];
}
