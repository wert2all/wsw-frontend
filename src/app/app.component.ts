import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';

import { CodeContainerComponent } from './code-container/code-container.component';
import { InputUrlComponent } from './input-url/input-url.component';
import { PreviewContainerComponent } from './preview-container/preview-container.component';
import { SubTitleComponent } from './share/content/title/sub-title.component';
import { TitleComponent } from './share/content/title/title.component';
import { PreviewActions } from './store/preview/preview.actions';
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
  private readonly store = inject(Store);
  token = this.store.selectSignal(previewFeature.selectToken);

  userPreviews = this.store.selectSignal(previewFeature.selectPreviews);

  pushUrl(url: string) {
    this.store.dispatch(PreviewActions.addNewUrl({ url }));
  }
}
