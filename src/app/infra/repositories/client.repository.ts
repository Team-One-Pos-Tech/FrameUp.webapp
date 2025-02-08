import { Injectable } from "@angular/core";
import { ApiAuthenticationV1SigninPostRequest, ApiAuthenticationV1SignupPostRequest, AuthenticationApi } from "../identity-api/apis/AuthenticationApi";
import ApiClientFactory from "../../services/api.client.factory";
import { environment } from "../../../environment";
import { ApiClientV1CpfGetRequest, ClientApi, RegisterClientRequest, SignInResponse } from "../identity-api";
import AuthenticationService from "../../services/authentication.service";

@Injectable({
    providedIn: 'root'
})
export default class ClientRepository {

    apiFactory: ApiClientFactory<ClientApi>;

    constructor(authenticationService: AuthenticationService) {
        this.apiFactory = new ApiClientFactory<ClientApi>(ClientApi, authenticationService);
    }

    async getUserInfo(username: string | null | undefined): Promise<UserInfo> {
        let clientApi = await this.apiFactory.createInstance(environment.identityApiUrl);

        let response = await clientApi.apiClientV1CpfGet(<ApiClientV1CpfGetRequest>{
            cpf: username?.replaceAll(".", "").replace("-", "").trim()
        });

        return <UserInfo>{
            name: response.name,
            email: response.email,
            cpf: response.cpf,
            id: response.id
        };
    }
}

export interface UserInfo {
    name: string;
    email: string;
    cpf: string;
    id: string;
}
