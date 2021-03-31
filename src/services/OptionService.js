import AbstractAbcService from "@/services/AbstractAbcService";
import Option from "@/models/Option";

class OptionService extends AbstractAbcService {
    constructor() {
        super();
        this.model = Option;
        this.entityRoute = "/options"
    }

    create(data, onSuccess, onFail, onDone) {
        onDone();
        onFail("Option creation is not supported in Ecommerce, please go to the Configurator.");
    }
}

const optionService = new OptionService();
export default optionService;