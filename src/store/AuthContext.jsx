import { createContext, useState, useCallback } from "react";
import * as authApi from "../network/api/auth";
import { setToken, clearToken } from "../network/tokenStore";

export const AuthContext = createContext(null);

// Wrap <App /> in <AuthProvider> once, at the top. Any component can then
// read/update auth state via the useAuth() hook instead of prop-drilling.
export function AuthProvider({ children }) {
  const [token, setTokenState] = useState(null);
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | loading | error
  const [error, setError] = useState(null);

  const signIn = useCallback(async (email, password) => {
    setStatus("loading");
    setError(null);
    try {
      const { token, user } = await authApi.login({ email, password });
      setToken(token); // network/tokenStore — lets the plain fetch() modules attach it
      setTokenState(token);
      setUser(user);
      setStatus("idle");
      return true;
    } catch (err) {
      setError(err.message || "Sign in failed");
      setStatus("error");
      return false;
    }
  }, []);

  const signOut = useCallback(async () => {
    await authApi.logout();
    clearToken();
    setTokenState(null);
    setUser(null);
  }, []);

  const value = {
    token,
    user,
    isAuthenticated: Boolean(token),
    status,
    error,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
