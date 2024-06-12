import { inject } from '@angular/core';
import {
  Actions,
  createEffect,
  ofType,
  ROOT_EFFECTS_INIT,
} from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';

import { ApiClient } from '../../api/graphql';
import { StoreDispatchEffect, StoreUnDispatchEffect } from '../../app.types';
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

const createNewToken = (actions$ = inject(Actions), api = inject(ApiClient)) =>
  actions$.pipe(
    ofType(PreviewActions.createNewToken),
    exhaustMap(() =>
      api.createToken().pipe(
        map(result => result.data?.token),
        map(token =>
          token
            ? PreviewActions.successCreateToken({ token })
            : PreviewActions.emptyToken()
        ),
        catchError(
          () => of() //TODO add exception
        )
      )
    )
  );

export const previewEffects = {
  initState: createEffect(initState, StoreDispatchEffect),
  createNewToke: createEffect(createNewToken, StoreUnDispatchEffect),
};
