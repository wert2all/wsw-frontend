export interface LocalStorageState {
  token: string | undefined;
  urls: string[];
}
export interface Preview {
  url: URL;
  preview: string;
  title?: string;
  description?: string;
}

export interface PreviewState {
  token: string | undefined;
  preview: Preview[];
}
