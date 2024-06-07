import { inject } from '@angular/core';
import {
  Actions,
  createEffect,
  ofType,
  ROOT_EFFECTS_INIT,
} from '@ngrx/effects';

import { map } from 'rxjs';
import { StoreDispatchEffect } from '../../app.types';
import { PreviewActions } from './preview.actions';
import { StoragePreviewService } from './storage-preview.service';

const initState = (
  actions$ = inject(Actions),
  storageService = inject(StoragePreviewService)
) =>
  actions$.pipe(
    ofType(ROOT_EFFECTS_INIT),
    map(() => storageService.readState()),
    map(state =>
      state.token
        ? PreviewActions.applyInitialStateFromLocalStorage({ state })
        : PreviewActions.createNewToken()
    )
  );

export const previewEffects = {
  initState: createEffect(initState, StoreDispatchEffect),
};
