import { createFeature, createReducer } from '@ngrx/store';

import { PreviewState } from './preview.types';

const initialState: PreviewState = { token: 'test_token' };

export const previewFeature = createFeature({
  name: 'preview',
  reducer: createReducer(initialState),
});
