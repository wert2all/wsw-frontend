import { createFeature, createReducer, on } from '@ngrx/store';

import { PreviewActions } from './preview.actions';
import { Preview, PreviewState } from './preview.types';

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
      PreviewActions.successAddNewUrl,
      (state): PreviewState => ({ ...state, isLoading: false })
    ),

    on(
      PreviewActions.createNewToken,
      PreviewActions.addNewUrl,
      (state: PreviewState): PreviewState => ({ ...state, isLoading: true })
    ),

    on(
      PreviewActions.applyInitialStateFromLocalStorage,
      (_, { state }): PreviewState => ({
        ...state,
        previews: [],
        isLoading: false,
      })
    ),

    on(PreviewActions.successAddNewUrl, (state, { preview }) => {
      const sameUrls = state.previews.filter(
        item => item.url.toString() == preview.url.toString()
      );
      const newUrl: Preview | null =
        sameUrls.length === 0
          ? {
              url: preview.url,
              preview: preview.preview,
              status: preview.status,
            }
          : null;
      return newUrl !== null
        ? { ...state, previews: [...state.previews, newUrl] }
        : { ...state };
    }),

    on(
      PreviewActions.successCreateToken,
      (state, { token }): PreviewState => ({
        ...state,
        token: token,
      })
    )
  ),
});
