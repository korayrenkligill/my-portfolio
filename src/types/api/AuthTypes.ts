interface LoginReq {
  usernameOrEmail: string;
  password: string;
  rememberMe: boolean;
}

interface LoginResp {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}
