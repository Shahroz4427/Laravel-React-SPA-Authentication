import Layout from "../Layout"
import { useReducer, useState } from "react";
import paginationReducer from "../reducers/paginationReducer";
import CustomersService from "../services/CustomersService";
import Pagination from "../components/Pagination";
import ActionsDropDown from "../components/ActionsDropDown";
import SortableHeader from "../components/SortableHeader";
import '../table.css'


const sortMapping = {
    asc: {
        Name: "name",
        Email: "email",
    },
    desc: {
        Name: "-name",
        Email: "-email",
    },
};


const Customers = () => {

    const [search, setSearch] = useState("");

    const [perPage, setPerPage] = useState("10");

    const [paginationState, dispatchPagination] = useReducer(paginationReducer, { activePage: 1 });

    const [specificSearch, setSpecificSearch] = useState({ name: "", email: "", phone: "" });

    const [sort, setSort] = useState();

    const { data, isLoading } = CustomersService.fetchCustomers({
        ...(search ? { "filter[search]": search } : {
            "filter[name]": specificSearch.name,
            "filter[email]": specificSearch.email,
        }),
        perPage,
        page: paginationState.activePage,
        include: "customerAddress,customerCompany",
        sort,
    });


    const handlePrePage = () => {
        if (paginationState.activePage > 1) {
            dispatchPagination({ type: 'PrevPage' });
        }
    };

    const handleNextPage = () => {
        if (data && paginationState.activePage < data.meta.last_page) {
            dispatchPagination({ type: 'NextPage' });
        }
    };

    const handleSetPage = (page) => dispatchPagination({ type: 'SetPage', page });

    const handleSort = (order, name) => setSort(sortMapping[order]?.[name] || null);



    return (
        <Layout>
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title">CUSTOMERS</h5>
                    <div className="row mx-2 align-items-center">
                        <div className="col-12 col-sm-6 col-md-2 mb-3 mb-md-0">
                            <div className="dataTables_length">
                                <select className="form-select" onChange={(e) => setPerPage(e.target.value)} value={perPage}>
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="15">15</option>
                                    <option value="20">20</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-10">
                            <div className="d-flex flex-column flex-sm-row flex-wrap flex-md-nowrap justify-content-between align-items-start align-items-sm-center">
                                <div className="dataTables_filter flex-grow-1 mb-3 mb-sm-0 me-sm-3">
                                    <input
                                        onChange={(e) => setSearch(e.target.value)}
                                        type="search"
                                        className="form-control"
                                        placeholder="Search..."
                                        aria-label="Search"
                                    />
                                </div>
                                <div className="dt-buttons">
                                    <button className="btn btn-primary d-flex align-items-center justify-content-center">
                                        <i className="bx bx-plus me-2"></i>
                                        <span className="d-none d-sm-inline">New Customer</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="table-responsive text-nowrap">
                    <table className="table">
                        <thead className="table-dark">
                            <tr>
                                <SortableHeader name="Name" onSort={handleSort} />
                                <SortableHeader name="Email" onSort={handleSort} />
                                <SortableHeader name="City" onSort={handleSort} />
                                <SortableHeader name="Zipcode" onSort={handleSort} />
                                <SortableHeader name="Phone" onSort={handleSort} />
                                <SortableHeader name="Company" onSort={handleSort} />
                                <th className="px-4 py-2 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input onChange={(e) => setSpecificSearch({ ...specificSearch, name: e.target.value })} type="search" className="form-control" placeholder="Search" />
                                </td>
                                <td>
                                    <input onChange={(e) => setSpecificSearch({ ...specificSearch, email: e.target.value })} type="search" className="form-control" placeholder="Search" />
                                </td>
                            </tr>
                            {isLoading ? (
                                Array.from({ length: perPage }).map((_, index) => (
                                    <tr key={index}>
                                        <td className="skeleton-row"></td>
                                        <td className="skeleton-row"></td>
                                        <td className="skeleton-row"></td>
                                        <td className="skeleton-row"></td>
                                        <td className="skeleton-row"></td>
                                        <td className="skeleton-row"></td>
                                        <td className="skeleton-row"></td>
                                    </tr>
                                ))
                            ) : (
                                data?.data.map((customer, index) => (
                                    <tr key={index}>
                                        <td>{customer.name}</td>
                                        <td>{customer.email}</td>
                                        <td>{customer.address.city}</td>
                                        <td>{customer.address.zipcode}</td>
                                        <td>{customer.phone}</td>
                                        <td>{customer.company.name}</td>
                                        <td><ActionsDropDown /></td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="card-footer">
                    <div className="row mx-2 ">
                        <div className="col-sm-12 col-md-6 py-3">
                            <div className="dataTables_info">Showing {data && data.meta.from} to {data && data.meta.to} of {data && data.meta.total} entries</div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <Pagination
                                isLoading={isLoading}
                                pagelinks={data && data.meta.links}
                                activeLink={(page) => handleSetPage(page)}
                                last_page={data && data.meta.last_page}
                                moveToLastPage={(lastPage) => handleSetPage(lastPage)}
                                moveToFirstPage={() => handleSetPage(1)}
                                moveToPrePage={handlePrePage}
                                moveToNextPage={handleNextPage}
                            />
                        </div>
                    </div>
                </div>
            </div>


        </Layout>
    )
}

export default Customers


