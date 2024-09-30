import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { LocalStorageState, Preview } from './preview.types';

export const PreviewActions = createActionGroup({
  source: 'Preview',
  events: {
    'Check localStorage token': props<{ token: string }>(),

    'Apply initial state from localStorage': props<{
      state: LocalStorageState;
    }>(),
    'Create new token': emptyProps(),
    'Success create token': props<{ token: string }>(),

    'Add new url': props<{ url: string }>(),
    'Success add new url': props<{ preview: Preview }>(),

    'Empty token': emptyProps(),
    'Empty token on adding new url': emptyProps(),
  },
});
