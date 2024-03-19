import { APIClient } from "../ApiClient";
import { apiUrls } from "../ApiUrls";

class Auth extends APIClient {
  async login(data: LoginReq) {
    return await this.post<LoginResp>({
      path: apiUrls.user.login,
      body: data,
    });
  }
}

const auth = new Auth();
export default auth;
