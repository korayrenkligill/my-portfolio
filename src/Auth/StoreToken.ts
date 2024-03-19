// const saveToken = (
//   accessToken: string,
//   refreshToken: string,
//   expiresIn: number
// ) => {
//   const date = new Date();
//   date.setSeconds(date.getSeconds() + expiresIn);
//   sessionStorage.setItem("accessTokenexpireDate", date.getTime().toString());
//   sessionStorage.setItem("accessToken", accessToken);
//   localStorage.setItem("refreshToken", refreshToken);
// };
// const refreshAccessToken = async () => {
//     const refreshToken = getRefreshToken();
//     if (refreshToken == null) {
//         clearRefreshToken();
//         location.reload();
//         return null;
//     }
//     const resp = await Identity.refreshToken(refreshToken);
//     if (!resp.isOk) {
//         clearRefreshToken();
//         location.reload();
//         return null;
//     }

//     saveToken(resp.data.accessToken, resp.data.refreshToken, resp.data.expiresIn);
//     return resp.data.accessToken;
// }

// const getAccessToken = async () => {
//   const expireDate = new Date(
//     parseInt(sessionStorage.getItem("accessTokenexpireDate") ?? "0")
//   );
//   const token =
//     expireDate > new Date() ? sessionStorage.getItem("accessToken") : null;
//   if (token) return token;

//   //   return await refreshAccessToken();
// };

// const getRefreshToken = () => {
//   return localStorage.getItem("refreshToken");
// };
// const clearRefreshToken = () => {
//   return localStorage.removeItem("refreshToken");
// };

// export {
//   saveToken,
//   getAccessToken,
//   getRefreshToken,
//   //   refreshAccessToken,
//   clearRefreshToken,
// };
