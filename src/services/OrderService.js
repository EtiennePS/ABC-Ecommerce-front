import AbstractAbcService from "@/services/AbstractAbcService";
import Order from "@/models/Order";

class OrderService extends AbstractAbcService {
    constructor() {
        super();
        this.model = Order;
        this.entityRoute = "/orders"
    }
}

const orderService = new OrderService();
export default orderService;