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

import { mapValues } from '../runtime';
import type { CPF } from './CPF';
import {
    CPFFromJSON,
    CPFFromJSONTyped,
    CPFToJSON,
    CPFToJSONTyped,
} from './CPF';

/**
 * 
 * @export
 * @interface GetClientResponse
 */
export interface GetClientResponse {
    /**
     * 
     * @type {string}
     * @memberof GetClientResponse
     */
    name?: string | null;
    /**
     * 
     * @type {CPF}
     * @memberof GetClientResponse
     */
    cpf?: CPF;
}

/**
 * Check if a given object implements the GetClientResponse interface.
 */
export function instanceOfGetClientResponse(value: object): value is GetClientResponse {
    return true;
}

export function GetClientResponseFromJSON(json: any): GetClientResponse {
    return GetClientResponseFromJSONTyped(json, false);
}

export function GetClientResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetClientResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'cpf': json['cpf'] == null ? undefined : CPFFromJSON(json['cpf']),
    };
}

export function GetClientResponseToJSON(json: any): GetClientResponse {
    return GetClientResponseToJSONTyped(json, false);
}

export function GetClientResponseToJSONTyped(value?: GetClientResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'cpf': CPFToJSON(value['cpf']),
    };
}

