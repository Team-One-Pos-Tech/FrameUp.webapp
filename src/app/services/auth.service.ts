import { Injectable } from "@angular/core";
import { ApiAuthenticationV1SigninPostRequest, AuthenticationApi } from "../infra/order-api/apis/AuthenticationApi";

export class LoginModel {
    username: string;

    constructor(username: string) {
        this.username = username;
    }
}

@Injectable({
    providedIn: 'root'
})
export default class AuthService {
    authenticationApi: AuthenticationApi;

    constructor() {
        this.authenticationApi = new AuthenticationApi();
    }

    async signin(loginModel: LoginModel) {
        var request = <ApiAuthenticationV1SigninPostRequest>{
            loginModel: {
                cpf: loginModel.username
            }
        }

        var response = await this.authenticationApi.apiAuthenticationV1SigninPost(request);

        return response;
    }
}