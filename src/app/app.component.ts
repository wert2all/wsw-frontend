import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Preview } from './app.types';
import { CodeContainerComponent } from './code-container/code-container.component';
import { InputUrlComponent } from './input-url/input-url.component';
import { PreviewContainerComponent } from './preview-container/preview-container.component';
import { SubTitleComponent } from './share/content/title/sub-title.component';
import { TitleComponent } from './share/content/title/title.component';

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
  userPreviews = signal<Preview[]>([
    {
      url: new URL('https://daisyui.com/components/card/'),
      preview: 'https://fakeimg.pl/380x230/',
    },
  ]);
}
