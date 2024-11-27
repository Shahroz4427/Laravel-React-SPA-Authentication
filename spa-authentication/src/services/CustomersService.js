
import { useQuery } from "@tanstack/react-query";
import { axios } from "../lib/axios";

class CustomersService {

    static getCustomers = async (query) => {
        const response = await axios.get("/api/customers", { params: query });
        return response.data;
    };

    static fetchCustomers = (query) => {
        return useQuery({
            queryKey: ["customers", query],
            queryFn: () => CustomersService.getCustomers(query),
        });
    };

}

export default CustomersService;