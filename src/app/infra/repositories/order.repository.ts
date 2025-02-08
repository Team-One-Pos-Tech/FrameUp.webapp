import { Injectable } from "@angular/core";
import { ApiAuthenticationV1SigninPostRequest, ApiAuthenticationV1SignupPostRequest, AuthenticationApi } from "../identity-api/apis/AuthenticationApi";
import ApiClientFactory from "../../services/api.client.factory";
import { environment } from "../../../environment";
import { RegisterClientRequest, SignInResponse } from "../identity-api";
import { GetProcessingOrderResponse, OrderApi, OrderPostRequest } from "../order-api";
import Order, { Package, Video } from "../../entities/order.model";
import AuthenticationService from "../../services/authentication.service";
import CreateOrderRequest from "../../entities/create-order";

@Injectable({
    providedIn: 'root'
})
export default class OrderRepository {
    apiFactory: ApiClientFactory<OrderApi>;

    constructor(private authenticationService: AuthenticationService) {
        this.apiFactory = new ApiClientFactory<OrderApi>(OrderApi, authenticationService);
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
            order.packages!.map((pkg) => new Package(pkg.fileName!, pkg.uri!))
        ));
    }

    async createOrder(createOrder: CreateOrderRequest) {
        let orderApi = await this.apiFactory.createInstance(environment.orderApiUrl);

        var response = await orderApi.orderPost(<OrderPostRequest>{
            captureInterval: createOrder.captureInterval,
            exportResolution: createOrder.exportResolution,
            videos: createOrder.videos.map((video) => new Blob([video], { type: video.type })),
        })

        console.log(response);
    }
}