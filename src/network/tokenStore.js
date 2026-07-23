// Holds the current bearer token outside React state, so the plain fetch()
// modules in network/api/ can read it without needing the AuthContext
// passed down through every hook. AuthContext calls setToken()/clearToken()
// on sign in/out; it's the only thing that mutates this.
//
// Deliberately in-memory only (no localStorage) — same "nothing persists
// across a refresh" behavior the mock version had. If you want sessions to
// survive a page reload, this is the place to add persistence.

let currentToken = null;

export function setToken(token) {
  currentToken = token;
}

export function getToken() {
  return currentToken;
}

export function clearToken() {
  currentToken = null;
}
