import { EffectConfig } from '@ngrx/effects';

export interface Preview {
  url: URL;
  preview: string;
  title?: string;
  description?: string;
}

export const StoreDispatchEffect: EffectConfig & {
  functional: true;
  dispatch?: true;
} = { functional: true };
export const StoreUnDispatchEffect: EffectConfig & {
  functional: true;
  dispatch: false;
} = {
  functional: true,
  dispatch: false,
};
