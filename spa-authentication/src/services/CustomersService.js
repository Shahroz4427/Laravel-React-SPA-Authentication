
import { useQuery } from "@tanstack/react-query";
import { axios } from "../lib/axios";

class CustomersService {

    static getCustomers = async (query) => {
        const response = await axios.get("/api/customers", { params: query });
        return response.data;
    };


    static destroyCustomer = async (id) => {
        try {
            const response = await axios.delete(`/api/customers/${id}`)
            if (response.status === 200) {
                console.log("deleted successfully");
            }
        } catch (error) {
            console.error(error);
        }
    }

    static createCustomer = async (data) => {
        try {
            const response = await axios.post('/api/customers/', data);
            if (response.status === 201) {
                return response;
            }
        } catch (error) {
            console.error("Error occurred while creating customer:", error);
            throw error;
        }
    };



    static fetchCustomers = (query) => {
        return useQuery({
            queryKey: ["customers", query],
            queryFn: () => CustomersService.getCustomers(query),
        });
    };

}

export default CustomersService;