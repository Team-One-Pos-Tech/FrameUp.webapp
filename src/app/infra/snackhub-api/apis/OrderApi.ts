/* tslint:disable */
/* eslint-disable */
/**
 * Snack Hub API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  CancelOrderRequest,
  CancelOrderResponse,
  CheckPaymentStatusResponse,
  CheckoutOrderRequest,
  CheckoutOrderResponse,
  ConfirmOrderRequest,
  ConfirmOrderResponse,
  OrderResponse,
  ProblemDetails,
  UpdateOrderStatusResponse,
  ValidationProblemDetails,
} from '../models/index';
import {
    CancelOrderRequestFromJSON,
    CancelOrderRequestToJSON,
    CancelOrderResponseFromJSON,
    CancelOrderResponseToJSON,
    CheckPaymentStatusResponseFromJSON,
    CheckPaymentStatusResponseToJSON,
    CheckoutOrderRequestFromJSON,
    CheckoutOrderRequestToJSON,
    CheckoutOrderResponseFromJSON,
    CheckoutOrderResponseToJSON,
    ConfirmOrderRequestFromJSON,
    ConfirmOrderRequestToJSON,
    ConfirmOrderResponseFromJSON,
    ConfirmOrderResponseToJSON,
    OrderResponseFromJSON,
    OrderResponseToJSON,
    ProblemDetailsFromJSON,
    ProblemDetailsToJSON,
    UpdateOrderStatusResponseFromJSON,
    UpdateOrderStatusResponseToJSON,
    ValidationProblemDetailsFromJSON,
    ValidationProblemDetailsToJSON,
} from '../models/index';

export interface ApiOrderV1CancelPutRequest {
    cancelOrderRequest?: CancelOrderRequest;
}

export interface ApiOrderV1CheckoutPostRequest {
    checkoutOrderRequest?: CheckoutOrderRequest;
}

export interface ApiOrderV1ConfirmPostRequest {
    confirmOrderRequest?: ConfirmOrderRequest;
}

export interface ApiOrderV1OrderIdPaymentStatusGetRequest {
    orderId: string;
}

export interface ApiOrderV1OrderIdStatusPutRequest {
    orderId: string;
}

/**
 * 
 */
export class OrderApi extends runtime.BaseAPI {

    /**
     */
    async apiOrderV1CancelPutRaw(requestParameters: ApiOrderV1CancelPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CancelOrderResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/Order/v1/Cancel`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CancelOrderRequestToJSON(requestParameters['cancelOrderRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CancelOrderResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiOrderV1CancelPut(requestParameters: ApiOrderV1CancelPutRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CancelOrderResponse> {
        const response = await this.apiOrderV1CancelPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiOrderV1CheckoutPostRaw(requestParameters: ApiOrderV1CheckoutPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CheckoutOrderResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/Order/v1/Checkout`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CheckoutOrderRequestToJSON(requestParameters['checkoutOrderRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CheckoutOrderResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiOrderV1CheckoutPost(requestParameters: ApiOrderV1CheckoutPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CheckoutOrderResponse> {
        const response = await this.apiOrderV1CheckoutPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiOrderV1ConfirmPostRaw(requestParameters: ApiOrderV1ConfirmPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConfirmOrderResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/Order/v1/Confirm`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ConfirmOrderRequestToJSON(requestParameters['confirmOrderRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConfirmOrderResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiOrderV1ConfirmPost(requestParameters: ApiOrderV1ConfirmPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConfirmOrderResponse> {
        const response = await this.apiOrderV1ConfirmPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiOrderV1GetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<OrderResponse>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/Order/v1`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(OrderResponseFromJSON));
    }

    /**
     */
    async apiOrderV1Get(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<OrderResponse>> {
        const response = await this.apiOrderV1GetRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async apiOrderV1OrderIdPaymentStatusGetRaw(requestParameters: ApiOrderV1OrderIdPaymentStatusGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CheckPaymentStatusResponse>> {
        if (requestParameters['orderId'] == null) {
            throw new runtime.RequiredError(
                'orderId',
                'Required parameter "orderId" was null or undefined when calling apiOrderV1OrderIdPaymentStatusGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/Order/v1/{orderId}/payment-status`.replace(`{${"orderId"}}`, encodeURIComponent(String(requestParameters['orderId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CheckPaymentStatusResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiOrderV1OrderIdPaymentStatusGet(requestParameters: ApiOrderV1OrderIdPaymentStatusGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CheckPaymentStatusResponse> {
        const response = await this.apiOrderV1OrderIdPaymentStatusGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiOrderV1OrderIdStatusPutRaw(requestParameters: ApiOrderV1OrderIdStatusPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UpdateOrderStatusResponse>> {
        if (requestParameters['orderId'] == null) {
            throw new runtime.RequiredError(
                'orderId',
                'Required parameter "orderId" was null or undefined when calling apiOrderV1OrderIdStatusPut().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/Order/v1/{orderId}/status`.replace(`{${"orderId"}}`, encodeURIComponent(String(requestParameters['orderId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UpdateOrderStatusResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiOrderV1OrderIdStatusPut(requestParameters: ApiOrderV1OrderIdStatusPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UpdateOrderStatusResponse> {
        const response = await this.apiOrderV1OrderIdStatusPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
