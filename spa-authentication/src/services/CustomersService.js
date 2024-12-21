
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

    static destroyCustomer = async (id) => {
        try {
            const response = await axios.delete(`/api/customers/${id}`)
            if (response.status === 200) {
                return response;
            }
        } catch (error) {
            throw error;
        }
    }

    static createCustomer = async (data) => {
        try {
            const response = await axios.post('/api/customers/', data);
            if (response.status === 201) {
                return response;
            }
        } catch (error) {
            throw error;
        }
    };

}

export default CustomersService;