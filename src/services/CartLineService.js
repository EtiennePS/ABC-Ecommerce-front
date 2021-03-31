import AbstractAbcService from "@/services/AbstractAbcService";
import Item from "@/models/Item";

class ItemService extends AbstractAbcService {
    constructor() {
        super();
        this.model = Item;
        this.entityRoute = "/cartLines"
    }

    create(data, onSuccess, onFail, onDone) {
        onDone();
        onFail("CartLine creation is not supported in Ecommerce, please choose your options on Configurator and add your product from there.");
    }
}

const itemService = new ItemService();
export default itemService;