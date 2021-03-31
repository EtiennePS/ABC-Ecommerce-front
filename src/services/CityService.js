import AbstractAbcService from "@/services/AbstractAbcService";
import City from "@/models/City";

class CityService extends AbstractAbcService {
    constructor() {
        super();
        this.model = City;
        this.entityRoute = "/cities"
    }
}

const cityService = new CityService();
export default cityService;