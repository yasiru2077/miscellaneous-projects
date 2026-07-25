export interface LoginRequest {
    email: string;
    password: string;
}

export interface RegisterRequest {
    username: string;
    email: string;
    password: string;
}

export interface LoginResponse {
    accessToken: string;
    tokenType: string;
    userId: string;
    username: string;
    email: string;
}

export interface RegisterResponse {
    accessToken: string;
    tokenType: string;
    userId: string;
    username: string;
    email: string;
}