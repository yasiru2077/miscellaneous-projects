import { persist } from "zustand/middleware";
import type { LoginResponse, RegisterResponse } from "../types";
import { create } from "zustand";

type AuthUser = {
  userId: string;
  username: string;
  email: string;
};

interface AuthState {
  user: AuthUser | null;
  token: string | null;
  isAuthenticated: boolean;
  setAuth: (data: LoginResponse | RegisterResponse) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,

      setAuth: (data) => {
        localStorage.setItem("task_token", data.accessToken);

        set({
          token: data.accessToken,
          user: {
            userId: data.userId,
            username: data.username,
            email: data.email,
          },
          isAuthenticated: true,
        });
      },

      clearAuth: () => {
        localStorage.removeItem("task_token");
        localStorage.removeItem("task_user");
        set({ user: null, token: null, isAuthenticated: false });
      },
    }),
    {
      name: "task_user",
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    },
  ),
);

