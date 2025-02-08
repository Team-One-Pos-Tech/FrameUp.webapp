import { Injectable } from "@angular/core";
import { ApiAuthenticationV1SigninPostRequest, AuthenticationApi } from "../identity-api/apis/AuthenticationApi";
import ApiClientFactory from "../../services/api.client.factory";
import { environment } from "../../../environment";

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
            message: response.notifications?.[0].message ?? ''
        };
    }
}

export interface signinResponse {
    apiKey: string | null | undefined;
    isValid: boolean;
    message: string;
}