import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  Signal,
} from '@angular/core';

import { Preview } from '../app.types';
import { SubTitleComponent } from '../share/content/title/sub-title.component';

type ViewPreview = Preview & {
  shortUrl: string;
  href: string;
  previewAltTitle: string;
};
@Component({
  selector: 'app-preview-container',
  standalone: true,
  templateUrl: './preview-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, SubTitleComponent],
})
export class PreviewContainerComponent {
  previews = input.required<Preview[]>();

  views: Signal<ViewPreview[]> = computed(() =>
    this.previews().map(preview => {
      return {
        ...preview,
        shortUrl: preview.url.host,
        href: preview.url.toString(),
        previewAltTitle: preview.title || preview.url.toString(),
      };
    })
  );
}
