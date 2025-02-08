import { Injectable } from "@angular/core";
import { ApiAuthenticationV1SigninPostRequest, ApiAuthenticationV1SignupPostRequest, AuthenticationApi } from "../identity-api/apis/AuthenticationApi";
import ApiClientFactory from "../../services/api.client.factory";
import { RegisterClientRequest, SignInResponse } from "../identity-api";
import AuthenticationService from "../../services/authentication.service";
import { environment } from "../../../environments/environment.development";

@Injectable({
    providedIn: 'root'
})
export default class AuthRepository {
    apiFactory: ApiClientFactory<AuthenticationApi>;

    constructor(authenticationService: AuthenticationService) {
        this.apiFactory = new ApiClientFactory<AuthenticationApi>(AuthenticationApi, authenticationService);
    }

    async signin(loginModel: LoginModel): Promise<AuthResponse> {
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

    async signup(singupModel: SingUpModel) {
        let authenticationApi = await this.apiFactory.createInstance(environment.identityApiUrl);

        let request = <ApiAuthenticationV1SignupPostRequest>{
            registerClientRequest: <RegisterClientRequest>{
                cpf: singupModel.username,
                email: singupModel.email,
                name: singupModel.name
            }
        }

        try {
            let response = await authenticationApi.apiAuthenticationV1SignupPost(request);
            
            return {
                apiKey: null,
                isValid: response.isValid ?? false,
                message: this.getNotifications(response)
            };
        } catch (error) {
            return {
                isValid: false,
            };
        }

    }

    private getNotifications(response: SignInResponse): string {
        if(response.notifications != undefined && response.notifications?.length > 0) {
            return response.notifications?.[0].message as string;
        }

        return '';
    }
}

export interface AuthResponse {
    apiKey: string | null | undefined;
    isValid: boolean;
    message: string;
}

export class LoginModel {
    username: string;

    constructor(username: string) {
        this.username = username;
    }
}

export interface SingUpModel {
    username: string;
    name: string;
    email: string;
}