import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-share-content-title',
  standalone: true,
  imports: [CommonModule],
  template: `<h1 class="default-font-bold text-4xl">
    <ng-content></ng-content>
  </h1>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent {}
