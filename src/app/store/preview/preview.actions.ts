import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { LocalStorageState } from './preview.types';

export const PreviewActions = createActionGroup({
  source: 'Preview',
  events: {
    'Apply initial state from localStorage': props<{
      state: LocalStorageState;
    }>(),
    'Create new token': emptyProps(),
    'Success create token': props<{ token: string }>(),

    'Add new url': props<{ url: string }>(),

    'Empty token': emptyProps(),
  },
});
