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
    if (authRequired) {
      if (!costomHeaders)
        defaultHeaders["Authorization"] = `Bearer {accessToken}`;
      else costomHeaders["Authorization"] = `Bearer {accessToken}`;
    }

    // If custom header has been created, add custom header
    if (costomHeaders) requestOptions.headers = costomHeaders;
    else requestOptions.headers = defaultHeaders;

    // If there are params, add them to the config object
    if (params != null) {
      requestOptions.params = params;
    }

    // If there are body, add them to the config object
    if (body != null) {
      requestOptions.data = body;
    }

    try {
      // Make the request with Axios
      const response = await axios(requestOptions);
      console.log(response.data);
      return response.data as T;
    } catch (error) {
      const _error = error as any;
      if (_error.response.data) {
        throw _error.response.data.message;
      } else {
        throw new Error(`Error: ${error}`);
      }
    }
  }

  async get<T>({
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
      "GET",
      path,
      authRequired,
      params,
      body,
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
