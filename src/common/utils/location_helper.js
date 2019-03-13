import { parse } from 'query-string';
import PathToRegexp from 'path-to-regexp';
import { Base64 } from 'js-base64';

window.PP = PathToRegexp;

export const  getQuery = (location) => {
  const { search } = location;
  return search[0] === '?' ? parse(search.substring(1, search.length)) : parse(search);
};

export const getQueryByKey = (location, key) => {
  const query = getQuery(location);
  return query ? query[key] : '';
};

export const getQueryFromUrlByKey = (url, key) => {
  const search = url.split('?');
  const query = search.length > 1 ? parse(search[1]) : parse(search[0]);
  return query ? query[key] : '';
};

export const openLink = (targetURL, newTab = true) => {
  let a = document.createElement('a');
  a.setAttribute('href', targetURL);
  if (newTab) {
    a.target = '_blank';
  }
  a.click();
  a = null; // free
};

export const formatQueryUrl = (url, query) => (
  Object.keys(query).length > 0
    ? `${url}?${Object.keys(query).map(key => `${key}=${encodeURIComponent(query[key])}`).join('&')}`
    : url
);

export const buildPath = (route, newParams = {}, matchParams = {},  query = {}, hash = '') => {
  const toPath = PathToRegexp.compile(route);
  const fullParams = {
    ...matchParams,
    ...newParams,
  };
  return `${formatQueryUrl(toPath(fullParams), query)}${(hash) ? '#' : ''}${hash}`;
};

export const getCurrentURL = (withQuery = true) => {
  const {
    href,
    protocol,
    hostname,
    port,
    search,
  } = window.location;
  let { origin } = window.location;
  if (!origin) {
    origin = `${protocol}//${hostname}${port ? `:${port}` : ''}`;
  }
  if (!withQuery) {
    return href.replace(origin, '').replace(search, '');
  }
  return href.replace(origin, '');
};

export const buildResourcePath = (vpath) => {
  if (!vpath) return null;
  const bpath = Base64.encode(vpath);
  const h = bpath.replace('/', '*');
  const p = h.replace('+', '-');
  return `/resource/${p}`;
};

export const buildApiPath = (url, params = {}, appName = 'server') => {
  const { API_HOST = '' } = process.env;
  // 如果不设置baseURL，则自动mapping到默认的接口
  const baseURL = `${API_HOST}/${appName}`;
  const pattern = PathToRegexp.compile(url);
  return `${baseURL}${pattern(params)}`;
};

