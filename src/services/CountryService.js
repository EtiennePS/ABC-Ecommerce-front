import AbstractAbcService from "@/services/AbstractAbcService";
import Country from "@/models/Country";

class CountryService extends AbstractAbcService {
    constructor() {
        super();
        this.model = Country;
        this.entityRoute = "/countries"
    }
}

const countryService = new CountryService();
export default countryService;