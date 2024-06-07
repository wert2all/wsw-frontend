import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-share-content-sub-title',
  standalone: true,
  imports: [CommonModule],
  template: `<h1 class="default-font-bold mb-2 text-2xl">
    <ng-content></ng-content>
  </h1>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubTitleComponent {}
