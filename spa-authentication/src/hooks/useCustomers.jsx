
import paginationReducer from "../reducers/paginationReducer";
import CustomersService from "../services/CustomersService";
import { useReducer, useState } from "react";
import { dangerAlert } from "../lib/sneat";

const useCustomers = () => {

    const [perPage, setPerPage] = useState("5");
    const [paginationState, dispatchPagination] = useReducer(paginationReducer, { activePage: 1 });
    const [globalSearch, setGlobalSearch] = useState({ "filter[search]": "" });
    const [specificSearch, setSpecificSearch] = useState({ "filter[name]": "", "filter[username]": "", "filter[email]": "" });
    const [sort, setSort] = useState();

    const { data, isLoading, refetch } = CustomersService.fetchCustomers({
        ...globalSearch,
        ...specificSearch,
        perPage,
        page: paginationState.activePage,
        include: "customerAddress,customerCompany",
        sort,
    });

    const sortMapping = {
        asc: { Name: "name", Email: "email", Username: "username" },
        desc: { Name: "-name", Email: "-email", Username: "-username" },
    };

    const handlePrePage = () => {
        if (paginationState.activePage > 1) {
            dispatchPagination({ type: "PrevPage" });
        }
    };

    const handleNextPage = () => {
        if (data && paginationState.activePage < data.meta.last_page) {
            dispatchPagination({ type: "NextPage" });
        }
    };

    const handleSetPage = (page) => {
        dispatchPagination({ type: "SetPage", page });
    };

    const handleSort = (order, name) => {
        setSort(sortMapping[order]?.[name] || null);
    };

    const showAlert = (id) => {
        dangerAlert(id, refetch);
    };

    const handleFilters = (name, value) => {
        setSpecificSearch({
            ...specificSearch,
            [`filter[${name}]`]: value,
        });
    };

    

    return {
        data,
        isLoading,
        pagination: {
            perPage,
            setPerPage,
            activePage: paginationState.activePage,
            handleSetPage,
            handlePrePage,
            handleNextPage,
            
        },
        search: {
            globalSearch,
            setGlobalSearch,
            specificSearch,
            handleFilters,
        },
        sorting: {
            sort,
            handleSort,
        },
        showAlert,
        refetch
    };
};

export default useCustomers;
