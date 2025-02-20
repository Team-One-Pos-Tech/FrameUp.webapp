/* tslint:disable */
/* eslint-disable */
/**
 * FrameUp.OrderService.Api
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
  ProcessingStatus,
  UpdatePackageItemRequest,
} from '../models/index';
import {
    ProcessingStatusFromJSON,
    ProcessingStatusToJSON,
    UpdatePackageItemRequestFromJSON,
    UpdatePackageItemRequestToJSON,
} from '../models/index';

export interface EventsUpdateOrderStatusOrderIdPutRequest {
    orderId: string;
    status?: ProcessingStatus;
    updatePackageItemRequest?: Array<UpdatePackageItemRequest>;
}

/**
 * 
 */
export class EventsApi extends runtime.BaseAPI {

    /**
     */
    async eventsUpdateOrderStatusOrderIdPutRaw(requestParameters: EventsUpdateOrderStatusOrderIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['orderId'] == null) {
            throw new runtime.RequiredError(
                'orderId',
                'Required parameter "orderId" was null or undefined when calling eventsUpdateOrderStatusOrderIdPut().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['status'] != null) {
            queryParameters['status'] = requestParameters['status'];
        }

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
            path: `/Events/UpdateOrderStatus/{orderId}`.replace(`{${"orderId"}}`, encodeURIComponent(String(requestParameters['orderId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['updatePackageItemRequest']!.map(UpdatePackageItemRequestToJSON),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async eventsUpdateOrderStatusOrderIdPut(requestParameters: EventsUpdateOrderStatusOrderIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.eventsUpdateOrderStatusOrderIdPutRaw(requestParameters, initOverrides);
    }

}
