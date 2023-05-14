export const BASE_SIZE = 8;

export const BUTTON_SIZE = BASE_SIZE * 4;
export const BUTTON_MARGIN = BASE_SIZE * 1.5;

export const ICON_BUTTON_SIZE = BASE_SIZE * 3;

export const ICON_SIZE_SM = BASE_SIZE * 1.8;
export const ICON_SIZE_MD = BASE_SIZE * 2.5;
export const ICON_SIZE_LG = BASE_SIZE * 3;
export const ICON_SIZE_XL = BASE_SIZE * 4;

export const SPINNER_SIZE = BASE_SIZE * 4;

export const isDevelopment = process.env.NODE_ENV === 'development';
export const isProduction = process.env.NODE_ENV === 'production';
export const isTesting =
  process.env.NODE_ENV === 'test' || (!isDevelopment && !isProduction);

export const authUrl = process.env.NEXT_PUBLIC_AUTH_URL || 'http://127.0.0.1:4000';
export const heimdallUrl = isDevelopment
  ? process.env.NEXT_PUBLIC_HEIMDALL_URL || 'http://127.0.0.1:3000'
  : authUrl;
