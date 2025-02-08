import { environment } from "../../environment";
import { Configuration } from "../infra/identity-api";
import AuthenticationService from "./authentication.service";


export default class ApiClientFactory<T> {
    private authenticationService: AuthenticationService;
    private constructorFn : any;
  
    constructor(constructorFn : any) {
        this.constructorFn = constructorFn;
        this.authenticationService = new AuthenticationService();
    }
  
    async createInstance(baseUrl: string) : Promise<T> {
        const user = await this.authenticationService.getCurrentUser();

        const config = new Configuration({
            basePath: baseUrl,
            headers: {
                'Authorization': 'Bearer ' + user?.apiKey,
            }
        });

        return new this.constructorFn(config);
    }
  }