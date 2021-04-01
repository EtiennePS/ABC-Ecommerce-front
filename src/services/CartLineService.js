import AbstractAbcService from "@/services/AbstractAbcService";
import CartLine from "@/models/CartLine";

class CartLineService extends AbstractAbcService {
    constructor() {
        super();
        this.model = CartLine;
        this.entityRoute = "/cartLines"
    }

    create(data, onSuccess, onFail, onDone) {
        onDone();
        onFail("CartLine creation is not supported in Ecommerce, please choose your options on Configurator and add your product from there.");
    }

    getUserCart(onSuccess, onFail, onDone, options) {
        this.doGet(this.entityRoute + "/mines", onSuccess, onFail, onDone, options);
    }
}

const cartLineService = new CartLineService();
export default cartLineService;