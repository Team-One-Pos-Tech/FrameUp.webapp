import { Injectable } from "@angular/core";
import { ApiAuthenticationV1SigninPostRequest, ApiAuthenticationV1SignupPostRequest, AuthenticationApi } from "../identity-api/apis/AuthenticationApi";
import ApiClientFactory from "../../services/api.client.factory";
import { environment } from "../../../environment";
import { RegisterClientRequest, SignInResponse } from "../identity-api";
import { GetProcessingOrderResponse, OrderApi } from "../order-api";
import Order, { Video } from "../../entities/order.model";

@Injectable({
    providedIn: 'root'
})
export default class OrderRepository {
    apiFactory: ApiClientFactory<OrderApi>;

    constructor() {
        this.apiFactory = new ApiClientFactory<OrderApi>(OrderApi);
    }

   async getOrders(): Promise<Order[]> {
        let orderApi = await this.apiFactory.createInstance(environment.orderApiUrl);

        let response = await orderApi.orderGet();

        return response.map((order: GetProcessingOrderResponse) => new Order(
            order.id!,
            order.status!,
            order.ownerId!,
            order.videos!.map((video) => new Video(
                video.id!,
                video.name!,
                video.contentType!,
                video.size!
            )),
            order.exportResolution!,
            order.captureInterval!,
            []
        ));
   }
}