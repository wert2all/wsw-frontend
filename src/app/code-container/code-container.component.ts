import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TitleComponent } from '../share/content/title/title.component';
import { SubTitleComponent } from '../share/content/title/sub-title.component';

@Component({
  selector: 'app-code-container',
  standalone: true,
  templateUrl: './code-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TitleComponent, SubTitleComponent],
})
export class CodeContainerComponent {}
