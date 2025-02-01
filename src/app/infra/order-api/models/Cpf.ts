/* tslint:disable */
/* eslint-disable */
/**
 * IdentityService.Api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
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
 * @interface Cpf
 */
export interface Cpf {
    /**
     * 
     * @type {string}
     * @memberof Cpf
     */
    value?: string | null;
}

/**
 * Check if a given object implements the Cpf interface.
 */
export function instanceOfCpf(value: object): value is Cpf {
    return true;
}

export function CpfFromJSON(json: any): Cpf {
    return CpfFromJSONTyped(json, false);
}

export function CpfFromJSONTyped(json: any, ignoreDiscriminator: boolean): Cpf {
    if (json == null) {
        return json;
    }
    return {
        
        'value': json['value'] == null ? undefined : json['value'],
    };
}

export function CpfToJSON(json: any): Cpf {
    return CpfToJSONTyped(json, false);
}

export function CpfToJSONTyped(value?: Cpf | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'value': value['value'],
    };
}

