import axios, { AxiosRequestConfig } from "axios";

export class APIClient {
  constructor(
    private baseURL: string = process.env.NEXT_PUBLIC_API_URL! ?? ""
  ) {}

  private async request<T>(
    method: string,
    path: string,
    authRequired: boolean = false,
    params: any = null,
    body: any = null,
    costomHeaders: any = null
  ): Promise<T> {
    // Pequest path
    const url: string = `${this.baseURL}${path}`;

    const defaultHeaders: any = {
      "Content-Type": "application/json",
    };

    // Request options
    const requestOptions: AxiosRequestConfig = {
      method: method,
      url: url,
    };

    // Options auth control
    if (authRequired)
      if (!costomHeaders)
        defaultHeaders["Authorization"] = `Bearer {accessToken}`;
      else costomHeaders["Authorization"] = `Bearer {accessToken}`;

    // If custom header has been created, add custom header
    if (costomHeaders) requestOptions.headers = costomHeaders;
    else requestOptions.headers = defaultHeaders;

    // If there are params, add them to the config object
    if (params != null) requestOptions.params = params;

    // If there are body, add them to the config object
    if (body != null) requestOptions.data = body;

    try {
      // Make the request with Axios
      const response = await axios(requestOptions);

      // Check for successful response status
      if (response.statusText === "OK") {
        return response.data as T;
      } else {
        throw new Error(`Server Error: ${response.status}`);
      }
    } catch (error) {
      // Handle the error message
      const _error = error as any;

      if (_error.response) {
        // Server responded but an error occurred
        if (_error.response.data) {
          throw _error.response.data;
        } else {
          throw new Error(`Server Error: ${_error.response.status}`);
        }
      } else {
        // Error message for cases like connection failure
        throw new Error(`Connection Error: ${_error.message}`);
      }
    }
  }

  async get<T>({
    path,
    authRequired = false,
    params = null,
    costomHeaders = null,
  }: {
    path: string;
    authRequired?: boolean;
    params?: any;
    costomHeaders?: any;
  }): Promise<T> {
    return await this.request<T>(
      "GET",
      path,
      authRequired,
      params,
      null,
      costomHeaders
    );
  }

  async post<T>({
    path,
    authRequired = false,
    params = null,
    body = null,
    costomHeaders = null,
  }: {
    path: string;
    authRequired?: boolean;
    params?: any;
    body?: any;
    costomHeaders?: any;
  }): Promise<T> {
    return await this.request<T>(
      "POST",
      path,
      authRequired,
      params,
      body,
      costomHeaders
    );
  }

  async put<T>(
    path: string,
    authRequired: boolean = false,
    params: any = null,
    body: any = null,
    costomHeaders: any = null
  ): Promise<T> {
    return await this.request<T>(
      "PUT",
      path,
      authRequired,
      params,
      body,
      costomHeaders
    );
  }

  async delete<T>(
    path: string,
    authRequired: boolean = false,
    params: any = null,
    body: any = null,
    costomHeaders: any = null
  ): Promise<T> {
    return await this.request<T>(
      "DELETE",
      path,
      authRequired,
      params,
      body,
      costomHeaders
    );
  }
}
