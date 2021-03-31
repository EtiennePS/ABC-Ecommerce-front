import AbstractAbcService from "@/services/AbstractAbcService";
import Item from "@/models/Item";

export default class ItemService extends AbstractAbcService {
    constructor() {
        super();
        this.model = Item;
        this.entityRoute = "/cartLines"
    }
}