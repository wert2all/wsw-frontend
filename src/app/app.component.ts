import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';

import { Preview } from './app.types';
import { CodeContainerComponent } from './code-container/code-container.component';
import { InputUrlComponent } from './input-url/input-url.component';
import { PreviewContainerComponent } from './preview-container/preview-container.component';
import { SubTitleComponent } from './share/content/title/sub-title.component';
import { TitleComponent } from './share/content/title/title.component';
import { previewFeature } from './store/preview/preview.reducers';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    RouterOutlet,
    TitleComponent,
    InputUrlComponent,
    PreviewContainerComponent,
    CodeContainerComponent,
    SubTitleComponent,
  ],
})
export class AppComponent {
  token = inject(Store).selectSignal(previewFeature.selectToken);

  userPreviews = signal<Preview[]>([
    {
      url: new URL('https://daisyui.com/components/card/'),
      preview: 'https://fakeimg.pl/380x230/',
    },
  ]);
}
