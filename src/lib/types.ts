type DateString = string;

export interface InitializationData {
  id: string;
  created_at?: DateString;
  updated_at?: DateString;
  request_url: string;
  type?: string;
  refresh?: boolean;
  state?: string;
  ui: any;
}
