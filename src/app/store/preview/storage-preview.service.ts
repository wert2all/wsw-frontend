import { Injectable } from '@angular/core';

import { LocalStorageState } from './preview.types';

@Injectable({
  providedIn: 'root',
})
export class StoragePreviewService {
  private readonly tokenKey = 'previewToken';
  private readonly urlsKey = 'previewUrls';

  readState(): LocalStorageState {
    return {
      token: localStorage.getItem(this.tokenKey) || undefined,
      urls: JSON.parse(localStorage.getItem(this.urlsKey) || '[]'),
    };
  }
}
