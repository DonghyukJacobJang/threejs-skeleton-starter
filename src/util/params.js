const queryString = require('query-string');

export function getQueryFromParams(prop) {
  // eslint-disable-next-line
  const params = queryString.parse(location.search);
  return params[prop] !== undefined ? params[prop] : false;
}

export function setQuery(query, val, reload = false) {
  const queries = queryString.parse(window.location.search);
  const newQueries = Object.assign({}, queries, {
    [query]: val
  });
  const stringified = queryString.stringify(newQueries);

  if (reload) {
    window.location.href = `${window.location.pathname}?${stringified}`;
    return;
  }
  const url = `${window.location.protocol}//${window.location.host}${
    window.location.pathname
  }?${stringified}`;
  window.history.pushState({ path: url }, '', url);
}
