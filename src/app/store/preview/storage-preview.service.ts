import { Injectable } from '@angular/core';
import { PreviewState } from './preview.types';

@Injectable({
  providedIn: 'root',
})
export class StoragePreviewService {
  constructor() {}
  readState(): PreviewState | undefined {
    return undefined;
  }
}
