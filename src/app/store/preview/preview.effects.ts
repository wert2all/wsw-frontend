import { inject } from '@angular/core';
import {
  Actions,
  createEffect,
  ofType,
  ROOT_EFFECTS_INIT,
} from '@ngrx/effects';

import { StoreUnDispatchEffect } from '../../app.types';

const initState = (actions$ = inject(Actions)) =>
  actions$.pipe(ofType(ROOT_EFFECTS_INIT));

export const previewEffects = {
  initState: createEffect(initState, StoreUnDispatchEffect),
};
