import { inject } from '@angular/core';
import {
  Actions, ofType,
  ROOT_EFFECTS_INIT
} from '@ngrx/effects';
import { map } from 'rxjs';
import { StoragePreviewService } from './storage-preview.service';

export const initState = (
  actions$ = inject(Actions),
  storageService = inject(StoragePreviewService)
) => actions$.pipe(
  ofType(ROOT_EFFECTS_INIT),
  map(() => storageService.readState()),
  map(state => {
    if (state) {
      return PreviewActions.
            ;
    } else {
    }
  })
);
