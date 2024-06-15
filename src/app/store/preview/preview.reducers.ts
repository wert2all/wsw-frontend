import { createFeature, createReducer, on } from '@ngrx/store';

import { PreviewActions } from './preview.actions';
import { PreviewState } from './preview.types';

const initialState: PreviewState = {
  token: undefined,
  previews: [],
  isLoading: true,
};

export const previewFeature = createFeature({
  name: 'preview',
  reducer: createReducer(
    initialState,
    on(
      PreviewActions.successCreateToken,
      PreviewActions.emptyToken,
      PreviewActions.applyInitialStateFromLocalStorage,
      (state): PreviewState => ({ ...state, isLoading: false })
    ),

    on(
      PreviewActions.createNewToken,
      PreviewActions.addNewUrl,
      (state: PreviewState) => ({ ...state, isLoading: true })
    ),

    on(
      PreviewActions.applyInitialStateFromLocalStorage,
      (_, { state }): PreviewState => ({
        ...state,
        previews: [],
        isLoading: false,
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
