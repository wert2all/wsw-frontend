import { createFeature, createReducer, on } from '@ngrx/store';

import { PreviewActions } from './preview.actions';
import { PreviewState } from './preview.types';

const initialState: PreviewState = { token: undefined, previews: [] };

export const previewFeature = createFeature({
  name: 'preview',
  reducer: createReducer(
    initialState,
    on(
      PreviewActions.applyInitialStateFromLocalStorage,
      (_, { state }): PreviewState => ({
        ...state,
        previews: [],
      })
    ),

    on(
      PreviewActions.successCreateToken,
      (state, { token }): PreviewState => ({
        ...state,
        token: token,
      })
    )
  ),
});
