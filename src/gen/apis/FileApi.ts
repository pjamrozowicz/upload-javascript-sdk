/* tslint:disable */
/* eslint-disable */
/**
 * upload-api
 * Upload API
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: hello@upload.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// @ts-ignore
import * as runtime from "../runtime";
import type {
  // @ts-ignore
  AsyncResponse,
  // @ts-ignore
  DeleteFileBatchRequest,
  // @ts-ignore
  ErrorResponse,
  // @ts-ignore
  FileDetails
} from "../models";

export interface DeleteFileParams {
  accountId: string;
  filePath: string;
}

export interface DeleteFileBatchOperationParams {
  accountId: string;
  deleteFileBatchRequest: DeleteFileBatchRequest;
}

export interface DownloadFileParams {
  accountId: string;
  filePath: string;
  auth?: boolean;
  cache?: boolean;
  download?: boolean;
  version?: string;
}

export interface GetFileDetailsParams {
  accountId: string;
  filePath: string;
}

export interface ProcessFileParams {
  accountId: string;
  filePath: string;
  transformation: string;
  artifact?: string;
  auth?: boolean;
  cache?: boolean;
  download?: boolean;
  version?: string;
}

/**
 *
 */
export class FileApi extends runtime.BaseAPI {
  /**
   * Synchronously deletes a single file.
   */
  private async deleteFileWithHttpInfo(
    requestParameters: DeleteFileParams,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
      throw new runtime.RequiredError(
        "accountId",
        "Required parameter requestParameters.accountId was null or undefined when calling deleteFile."
      );
    }

    if (requestParameters.filePath === null || requestParameters.filePath === undefined) {
      throw new runtime.RequiredError(
        "filePath",
        "Required parameter requestParameters.filePath was null or undefined when calling deleteFile."
      );
    }

    const queryParameters: any = {};

    if (requestParameters.filePath !== undefined) {
      queryParameters["filePath"] = requestParameters.filePath;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // authorization-header authentication
    }

    const operationBasePathOverride = [][0];

    const response = await this.request(
      {
        path: `/v2/accounts/{accountId}/files`.replace(
          `{${"accountId"}}`,
          // @ts-ignore
          "accountId" === "filePath"
            ? String(requestParameters.accountId).substr(1)
            : encodeURIComponent(String(requestParameters.accountId))
        ),
        method: "DELETE",
        headers: headerParameters,
        query: queryParameters
      },
      initOverrides,
      operationBasePathOverride
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Synchronously deletes a single file.
   */
  async deleteFile(
    requestParameters: DeleteFileParams,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.deleteFileWithHttpInfo(requestParameters, initOverrides);
  }

  /**
   * Asynchronously deletes multiple files.
   */
  private async deleteFileBatchWithHttpInfo(
    requestParameters: DeleteFileBatchOperationParams,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<AsyncResponse>> {
    if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
      throw new runtime.RequiredError(
        "accountId",
        "Required parameter requestParameters.accountId was null or undefined when calling deleteFileBatch."
      );
    }

    if (requestParameters.deleteFileBatchRequest === null || requestParameters.deleteFileBatchRequest === undefined) {
      throw new runtime.RequiredError(
        "deleteFileBatchRequest",
        "Required parameter requestParameters.deleteFileBatchRequest was null or undefined when calling deleteFileBatch."
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // authorization-header authentication
    }

    const operationBasePathOverride = [][0];

    const response = await this.request(
      {
        path: `/v2/accounts/{accountId}/files/batch`.replace(
          `{${"accountId"}}`,
          // @ts-ignore
          "accountId" === "filePath"
            ? String(requestParameters.accountId).substr(1)
            : encodeURIComponent(String(requestParameters.accountId))
        ),
        method: "DELETE",
        headers: headerParameters,
        query: queryParameters,
        body: requestParameters.deleteFileBatchRequest
      },
      initOverrides,
      operationBasePathOverride
    );

    return new runtime.JSONApiResponse(response);
  }

  /**
   * Asynchronously deletes multiple files.
   */
  async deleteFileBatch(
    requestParameters: DeleteFileBatchOperationParams,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<AsyncResponse> {
    const response = await this.deleteFileBatchWithHttpInfo(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Downloads a file in its original/unprocessed state.
   */
  private async downloadFileWithHttpInfo(
    requestParameters: DownloadFileParams,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.BinaryResult> {
    if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
      throw new runtime.RequiredError(
        "accountId",
        "Required parameter requestParameters.accountId was null or undefined when calling downloadFile."
      );
    }

    if (requestParameters.filePath === null || requestParameters.filePath === undefined) {
      throw new runtime.RequiredError(
        "filePath",
        "Required parameter requestParameters.filePath was null or undefined when calling downloadFile."
      );
    }

    const queryParameters: any = {};

    if (requestParameters.auth !== undefined) {
      queryParameters["_auth"] = requestParameters.auth;
    }

    if (requestParameters.cache !== undefined) {
      queryParameters["_cache"] = requestParameters.cache;
    }

    if (requestParameters.download !== undefined) {
      queryParameters["_download"] = requestParameters.download;
    }

    if (requestParameters.version !== undefined) {
      queryParameters["_version"] = requestParameters.version;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // authorization-header authentication
    }

    const operationBasePathOverride = ["https://upcdn.io"][0];

    const response = await this.request(
      {
        path: `/{accountId}/raw/{filePath}`
          .replace(
            `{${"accountId"}}`,
            // @ts-ignore
            "accountId" === "filePath"
              ? String(requestParameters.accountId).substr(1)
              : encodeURIComponent(String(requestParameters.accountId))
          )
          .replace(
            `{${"filePath"}}`,
            // @ts-ignore
            "filePath" === "filePath"
              ? String(requestParameters.filePath).substr(1)
              : encodeURIComponent(String(requestParameters.filePath))
          ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters
      },
      initOverrides,
      operationBasePathOverride
    );

    return new runtime.BinaryResult(response);
  }

  /**
   * Downloads a file in its original/unprocessed state.
   */
  async downloadFile(
    requestParameters: DownloadFileParams,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.BinaryResult> {
    const response = await this.downloadFileWithHttpInfo(requestParameters, initOverrides);
    return response;
  }

  /**
   * Retrieves the full details for a file.
   */
  private async getFileDetailsWithHttpInfo(
    requestParameters: GetFileDetailsParams,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<FileDetails>> {
    if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
      throw new runtime.RequiredError(
        "accountId",
        "Required parameter requestParameters.accountId was null or undefined when calling getFileDetails."
      );
    }

    if (requestParameters.filePath === null || requestParameters.filePath === undefined) {
      throw new runtime.RequiredError(
        "filePath",
        "Required parameter requestParameters.filePath was null or undefined when calling getFileDetails."
      );
    }

    const queryParameters: any = {};

    if (requestParameters.filePath !== undefined) {
      queryParameters["filePath"] = requestParameters.filePath;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // authorization-header authentication
    }

    const operationBasePathOverride = [][0];

    const response = await this.request(
      {
        path: `/v2/accounts/{accountId}/files/details`.replace(
          `{${"accountId"}}`,
          // @ts-ignore
          "accountId" === "filePath"
            ? String(requestParameters.accountId).substr(1)
            : encodeURIComponent(String(requestParameters.accountId))
        ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters
      },
      initOverrides,
      operationBasePathOverride
    );

    return new runtime.JSONApiResponse(response);
  }

  /**
   * Retrieves the full details for a file.
   */
  async getFileDetails(
    requestParameters: GetFileDetailsParams,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<FileDetails> {
    const response = await this.getFileDetailsWithHttpInfo(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Processes a file and downloads the result.
   */
  private async processFileWithHttpInfo(
    requestParameters: ProcessFileParams,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.BinaryResult> {
    if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
      throw new runtime.RequiredError(
        "accountId",
        "Required parameter requestParameters.accountId was null or undefined when calling processFile."
      );
    }

    if (requestParameters.filePath === null || requestParameters.filePath === undefined) {
      throw new runtime.RequiredError(
        "filePath",
        "Required parameter requestParameters.filePath was null or undefined when calling processFile."
      );
    }

    if (requestParameters.transformation === null || requestParameters.transformation === undefined) {
      throw new runtime.RequiredError(
        "transformation",
        "Required parameter requestParameters.transformation was null or undefined when calling processFile."
      );
    }

    const queryParameters: any = {};

    if (requestParameters.artifact !== undefined) {
      queryParameters["_artifact"] = requestParameters.artifact;
    }

    if (requestParameters.auth !== undefined) {
      queryParameters["_auth"] = requestParameters.auth;
    }

    if (requestParameters.cache !== undefined) {
      queryParameters["_cache"] = requestParameters.cache;
    }

    if (requestParameters.download !== undefined) {
      queryParameters["_download"] = requestParameters.download;
    }

    if (requestParameters.version !== undefined) {
      queryParameters["_version"] = requestParameters.version;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // authorization-header authentication
    }

    const operationBasePathOverride = ["https://upcdn.io"][0];

    const response = await this.request(
      {
        path: `/{accountId}/{transformation}/{filePath}`
          .replace(
            `{${"accountId"}}`,
            // @ts-ignore
            "accountId" === "filePath"
              ? String(requestParameters.accountId).substr(1)
              : encodeURIComponent(String(requestParameters.accountId))
          )
          .replace(
            `{${"filePath"}}`,
            // @ts-ignore
            "filePath" === "filePath"
              ? String(requestParameters.filePath).substr(1)
              : encodeURIComponent(String(requestParameters.filePath))
          )
          .replace(
            `{${"transformation"}}`,
            // @ts-ignore
            "transformation" === "filePath"
              ? String(requestParameters.transformation).substr(1)
              : encodeURIComponent(String(requestParameters.transformation))
          ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters
      },
      initOverrides,
      operationBasePathOverride
    );

    return new runtime.BinaryResult(response);
  }

  /**
   * Processes a file and downloads the result.
   */
  async processFile(
    requestParameters: ProcessFileParams,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.BinaryResult> {
    const response = await this.processFileWithHttpInfo(requestParameters, initOverrides);
    return response;
  }
}
