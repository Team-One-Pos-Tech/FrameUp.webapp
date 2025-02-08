import { Injectable } from "@angular/core";
import { ApiAuthenticationV1SigninPostRequest, AuthenticationApi } from "../identity-api/apis/AuthenticationApi";
import ApiClientFactory from "../../services/api.client.factory";
import { environment } from "../../../environment";
import { SignInResponse } from "../identity-api";

export class LoginModel {
    username: string;

    constructor(username: string) {
        this.username = username;
    }
}

@Injectable({
    providedIn: 'root'
})
export default class AuthRepository {
    apiFactory: ApiClientFactory<AuthenticationApi>;

    constructor() {
        this.apiFactory = new ApiClientFactory<AuthenticationApi>(AuthenticationApi);
    }

    async signin(loginModel: LoginModel): Promise<signinResponse> {
        let authenticationApi = await this.apiFactory.createInstance(environment.identityApiUrl);

        let request = <ApiAuthenticationV1SigninPostRequest>{
            loginModel: {
                cpf: loginModel.username
            }
        }

        let response = await authenticationApi.apiAuthenticationV1SigninPost(request);

        return {
            apiKey: response.idToken,
            isValid: response.isValid ?? false,
            message: this.getNotifications(response)
        };
    }

    private getNotifications(response: SignInResponse): string {
        if(response.notifications?.length != undefined &&  response.notifications?.length > 0) {
            response.notifications?.[0].message;
        }

        return '';
    }
}

export interface signinResponse {
    apiKey: string | null | undefined;
    isValid: boolean;
    message: string;
}