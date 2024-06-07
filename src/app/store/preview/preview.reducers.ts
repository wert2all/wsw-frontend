import { createFeature, createReducer, on } from '@ngrx/store';

import { PreviewActions } from './preview.actions';
import { PreviewState } from './preview.types';

const initialState: PreviewState = { token: 'test_token' };

export const previewFeature = createFeature({
  name: 'preview',
  reducer: createReducer(
    initialState,
    on(PreviewActions.applyInitialStateFromLocalStorage, state => ({
      ...state,
      token: state.token,
    }))
  ),
});
