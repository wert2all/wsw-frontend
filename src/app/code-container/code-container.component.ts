import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { SubTitleComponent } from '../share/content/title/sub-title.component';
import { TitleComponent } from '../share/content/title/title.component';

@Component({
  selector: 'app-code-container',
  standalone: true,
  templateUrl: './code-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TitleComponent, SubTitleComponent],
})
export class CodeContainerComponent {
  token = input.required<string | undefined>();
}
