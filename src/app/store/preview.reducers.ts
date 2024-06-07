import { createFeature, createReducer } from '@ngrx/store';

import { PreviewState } from './preview.types';

const initialState: PreviewState = { token: undefined };

export const previewFeature = createFeature({
  name: 'preview',
  reducer: createReducer(initialState),
});
