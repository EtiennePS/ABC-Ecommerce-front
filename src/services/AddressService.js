import AbstractAbcService from "@/services/AbstractAbcService";
import Address from "@/models/Address";

class AddressService extends AbstractAbcService {
    constructor() {
        super();
        this.model = Address;
        this.entityRoute = "/addresses"
    }
}

const addressService = new AddressService();
export default addressService;