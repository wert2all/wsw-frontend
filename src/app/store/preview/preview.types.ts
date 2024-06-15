export interface LocalStorageState {
  token: string | undefined;
  urls: string[];
}

export interface Preview {
  url: URL;
  preview: string;
  title?: string;
  description?: string;
  status: string;
}

export interface PreviewState {
  token: string | undefined;
  previews: Preview[];
}
