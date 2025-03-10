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


/**
 * 
 * @export
 */
export const ProcessingStatus = {
    Refused: 'Refused',
    Received: 'Received',
    Uploading: 'Uploading',
    Processing: 'Processing',
    Concluded: 'Concluded',
    Canceled: 'Canceled',
    Failed: 'Failed'
} as const;
export type ProcessingStatus = typeof ProcessingStatus[keyof typeof ProcessingStatus];


export function instanceOfProcessingStatus(value: any): boolean {
    for (const key in ProcessingStatus) {
        if (Object.prototype.hasOwnProperty.call(ProcessingStatus, key)) {
            if (ProcessingStatus[key as keyof typeof ProcessingStatus] === value) {
                return true;
            }
        }
    }
    return false;
}

export function ProcessingStatusFromJSON(json: any): ProcessingStatus {
    return ProcessingStatusFromJSONTyped(json, false);
}

export function ProcessingStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProcessingStatus {
    return json as ProcessingStatus;
}

export function ProcessingStatusToJSON(value?: ProcessingStatus | null): any {
    return value as any;
}

export function ProcessingStatusToJSONTyped(value: any, ignoreDiscriminator: boolean): ProcessingStatus {
    return value as ProcessingStatus;
}

