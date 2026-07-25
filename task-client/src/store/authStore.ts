import type { LoginRequest } from "../types";

type AuthUser = {
  userId: string;
  username: string;
  email: string;
};

interface AuthState {
  user: AuthUser | null;
  token: string | null;
  isAuthenticated: boolean;
  setAuth: (data: LoginRequest | LoginRequest) => void;
  clearAuth: () => void;
}

// export const useAuthStore = create<AuthState>()(
//   persist((set) => ({
//     user: null,
//     token: null,
//     isAuthenticated: false,

//     setAuth:(data) => {

//     }

//   })),
// );
