export interface User {
  id: string;
  fullName: string;
  email: string;
}

export interface AuthContextType {
  user: User | null;
  accessToken: string | null;
  loading: boolean;

  login: (
    accessToken: string,
    refreshToken: string,
    user: User
  ) => Promise<void>;

  logout: () => Promise<void>;
}