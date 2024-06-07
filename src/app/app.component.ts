import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Preview } from './app.types';
import { InputUrlComponent } from './input-url/input-url.component';
import { PreviewContainerComponent } from './preview-container/preview-container.component';
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
  ],
})
export class AppComponent {
  userPreviews = signal<Preview[]>([
    {
      url: new URL('https://daisyui.com/components/card/'),
      preview: 'https://fakeimg.pl/380x230/',
    },
    {
      url: new URL('https://daisyui.com/components/card/'),
      preview: 'https://fakeimg.pl/380x230/',
    },
    {
      url: new URL('https://daisyui.com/components/card/'),
      preview: 'https://fakeimg.pl/380x230/',
    },
    {
      url: new URL('https://daisyui.com/components/card/'),
      preview: 'https://fakeimg.pl/380x230/',
    },
  ]);
}
