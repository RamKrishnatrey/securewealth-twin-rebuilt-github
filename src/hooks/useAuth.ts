import { useAuthContext } from "../providers/AuthContext";

export function useAuth() {
  return useAuthContext();
}