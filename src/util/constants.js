import { getQueryFromParams } from './params';

export const DEV = process.env.DEV;
export const DEV_GUI = DEV && getQueryFromParams('gui') === null;
export const DEV_STATS = DEV && getQueryFromParams('stats') === null;
export const DEV_HELPERS = DEV && getQueryFromParams('helpers') === null;

export const BASE_URL = '/';
export const ASSETS_DIR = `${BASE_URL}assets/`;
export const WEBGL_DIR = `${ASSETS_DIR}webgl/`;
