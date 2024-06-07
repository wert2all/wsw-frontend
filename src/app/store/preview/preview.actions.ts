import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { PreviewState } from './preview.types';

export const PreviewActions = createActionGroup({
  source: 'Preview',
  events: {
    'Apply initial state from localStorage': props<{ state: PreviewState }>(),
    'Create new token': emptyProps(),
  },
});
