import AbstractAbcService from "@/services/AbstractAbcService";
import Item from "@/models/Item";

export default class ItemService extends AbstractAbcService {
    constructor() {
        super();
        this.model = Item;
        this.entityRoute = "/users"
    }

    create(data, onSuccess, onFail, onDone, options) {
        this.doPost(data, this.entityRoute + "/register", onSuccess, onFail, onDone, options);
    }

    authenticate(data, onSuccess, onFail, onDone, options) {
        this.doPost(data, this.entityRoute + "/authenticate", onSuccess, onFail, onDone, options);
    }

    getById(id, onSuccess, onFail, onDone, options) {
        this.doGet(this.entityRoute + "/id/" + id, onSuccess, onFail, onDone, options);
    }

    getByName(name, onSuccess, onFail, onDone, options) {
        this.doGet(this.entityRoute + "/name/" + name, onSuccess, onFail, onDone, options);
    }
}