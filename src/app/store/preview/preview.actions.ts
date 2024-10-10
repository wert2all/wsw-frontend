import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { LocalStorageState, PreviewData } from './preview.types';

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
    'Success add new url': props<{
      url: string;
      status: string;
      preview: PreviewData;
    }>(),

    'Update preview': props<{ url: string }>(),
    'Should not update preview': emptyProps(),
    'Success update preview': props<{
      url: string;
      status: string;
      preview: PreviewData;
    }>(),
    'Error update preview': props<{ error: string }>(),

    'Empty token': emptyProps(),
    'Empty token on adding new url': emptyProps(),
  },
});
