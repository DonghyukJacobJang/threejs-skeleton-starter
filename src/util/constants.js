import { getQueryFromParams } from './params';

const ENABLE_GUI = true;
const ENABLE_STATS = false;
const ENABLE_HELPERS = true;

export const DEV = process.env.DEV;
export const DEV_GUI = ENABLE_GUI || (DEV && getQueryFromParams('gui') === null);
export const DEV_STATS = ENABLE_STATS || (DEV && getQueryFromParams('stats') === null);
export const DEV_HELPERS = ENABLE_HELPERS || (DEV && getQueryFromParams('helpers') === null);

export const BASE_URL = '/';
export const ASSET_PATH = DEV ? './src/assets/' : './assets/';
export const IMAGE_PATH = `${ASSET_PATH}images/`;
