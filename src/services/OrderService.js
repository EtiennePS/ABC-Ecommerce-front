import AbstractAbcService from "@/services/AbstractAbcService";
import Order from "@/models/Order";

class OrderService extends AbstractAbcService {
    constructor() {
        super();
        this.model = Order;
        this.entityRoute = "/orders"
    }

    getUserOrders(onSuccess, onFail, onDone, options) {
        this.doGet(this.entityRoute + "/mines", onSuccess, onFail, onDone, options);
    }
}

const orderService = new OrderService();
export default orderService;