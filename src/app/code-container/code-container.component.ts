import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';

import { ApiUrlService } from '../service/api-url.service';
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
  private readonly apiUrlService = inject(ApiUrlService);
  token = input.required<string | undefined>();

  imgUrl = computed(() => {
    const token = this.token();
    return token ? this.apiUrlService.createApiImageUrl(token) : undefined;
  });

  jsonUrl = computed(() => {
    const token = this.token();
    return token ? this.apiUrlService.createApiJsonUrl(token) : undefined;
  });

  gqlUrl = computed(() => {
    return this.apiUrlService.createApiGqlUrl();
  });
}
