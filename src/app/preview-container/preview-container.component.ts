import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  computed,
  input,
} from '@angular/core';
import { Preview } from '../app.types';

type ViewPreview = Preview & {
  shortUrl: string;
  href: string;
  previewAltTitle: string;
};
@Component({
  selector: 'app-preview-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preview-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
