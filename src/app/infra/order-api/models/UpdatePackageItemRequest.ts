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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface UpdatePackageItemRequest
 */
export interface UpdatePackageItemRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdatePackageItemRequest
     */
    fileName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdatePackageItemRequest
     */
    uri?: string | null;
}

/**
 * Check if a given object implements the UpdatePackageItemRequest interface.
 */
export function instanceOfUpdatePackageItemRequest(value: object): value is UpdatePackageItemRequest {
    return true;
}

export function UpdatePackageItemRequestFromJSON(json: any): UpdatePackageItemRequest {
    return UpdatePackageItemRequestFromJSONTyped(json, false);
}

export function UpdatePackageItemRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdatePackageItemRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'fileName': json['fileName'] == null ? undefined : json['fileName'],
        'uri': json['uri'] == null ? undefined : json['uri'],
    };
}

export function UpdatePackageItemRequestToJSON(json: any): UpdatePackageItemRequest {
    return UpdatePackageItemRequestToJSONTyped(json, false);
}

export function UpdatePackageItemRequestToJSONTyped(value?: UpdatePackageItemRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'fileName': value['fileName'],
        'uri': value['uri'],
    };
}

