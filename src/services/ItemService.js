import AbstractAbcService from "@/services/AbstractAbcService";
import Item from "@/models/Item";

class ItemService extends AbstractAbcService {
    constructor() {
        super();
        this.model = Item;
        this.entityRoute = "/items"
    }

    getById(id, onSuccess, onFail, onDone, options) {
        this.doGet(this.entityRoute + "/id/" + id, onSuccess, onFail, onDone, options);
    }

    create(data, onSuccess, onFail, onDone) {
        onDone();
        onFail("Item creation is not supported in Ecommerce, please go to the Configurator.");
    }
}

const itemService = new ItemService();
export default itemService;