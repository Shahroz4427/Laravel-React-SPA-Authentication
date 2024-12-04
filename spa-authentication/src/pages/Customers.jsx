import Layout from "../Layout"
import { useReducer, useState } from "react";
import paginationReducer from "../reducers/paginationReducer";
import CustomersService from "../services/CustomersService";
import Pagination from "../components/Pagination";
import SortableHeader from "../components/SortableHeader";
import '../table.css'


const sortMapping = {
    asc: {
        Name: "name",
        Email: "email",
        Username: "username",
    },
    desc: {
        Name: "-name",
        Email: "-email",
        Username: "-username",
    },
};


const Customers = () => {

    const [search, setSearch] = useState("");

    const [perPage, setPerPage] = useState("5");

    const [paginationState, dispatchPagination] = useReducer(paginationReducer, { activePage: 1 });

    const [specificSearch, setSpecificSearch] = useState({ name: "", email: "", username: "" });

    const [sort, setSort] = useState();

    const { data, isLoading } = CustomersService.fetchCustomers({
        ...(search ? { "filter[search]": search } : {
            "filter[name]": specificSearch.name,
            "filter[username]": specificSearch.username,
            "filter[email]": specificSearch.email
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
            <div className="row">
                <div className="col-lg-3 col-md-12 col-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title d-flex align-items-start justify-content-between">
                                <div className="avatar flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                                        <path fill="#6563FF"
                                            d="M21,10.5H20v-1a1,1,0,0,0-2,0v1H17a1,1,0,0,0,0,2h1v1a1,1,0,0,0,2,0v-1h1a1,1,0,0,0,0-2Zm-7.7,1.72A4.92,4.92,0,0,0,15,8.5a5,5,0,0,0-10,0,4.92,4.92,0,0,0,1.7,3.72A8,8,0,0,0,2,19.5a1,1,0,0,0,2,0,6,6,0,0,1,12,0,1,1,0,0,0,2,0A8,8,0,0,0,13.3,12.22ZM10,11.5a3,3,0,1,1,3-3A3,3,0,0,1,10,11.5Z"></path>
                                    </svg>
                                </div>
                            </div>
                            <span className="fw-semibold d-block mb-1">Active Customers</span>
                            <h3 className="card-title mb-2">50</h3>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-12 col-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title d-flex align-items-start justify-content-between">
                                <div className="avatar flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                                        <path fill="#6563FF"
                                            d="M12,14a1,1,0,1,0-1-1A1,1,0,0,0,12,14Zm5,0a1,1,0,1,0-1-1A1,1,0,0,0,17,14Zm-5,4a1,1,0,1,0-1-1A1,1,0,0,0,12,18Zm5,0a1,1,0,1,0-1-1A1,1,0,0,0,17,18ZM7,14a1,1,0,1,0-1-1A1,1,0,0,0,7,14ZM19,4H18V3a1,1,0,0,0-2,0V4H8V3A1,1,0,0,0,6,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V10H20ZM20,8H4V7A1,1,0,0,1,5,6H19a1,1,0,0,1,1,1ZM7,18a1,1,0,1,0-1-1A1,1,0,0,0,7,18Z"></path>
                                    </svg>
                                </div>
                            </div>
                            <span className="fw-semibold d-block mb-1">Schedule Appointments</span>
                            <h3 className="card-title mb-2">50</h3>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-12 col-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title d-flex align-items-start justify-content-between">
                                <div className="avatar flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                                        <path fill="#6563FF"
                                            d="M12,14a1,1,0,1,0-1-1A1,1,0,0,0,12,14Zm5,0a1,1,0,1,0-1-1A1,1,0,0,0,17,14Zm-5,4a1,1,0,1,0-1-1A1,1,0,0,0,12,18Zm5,0a1,1,0,1,0-1-1A1,1,0,0,0,17,18ZM7,14a1,1,0,1,0-1-1A1,1,0,0,0,7,14ZM19,4H18V3a1,1,0,0,0-2,0V4H8V3A1,1,0,0,0,6,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V10H20ZM20,8H4V7A1,1,0,0,1,5,6H19a1,1,0,0,1,1,1ZM7,18a1,1,0,1,0-1-1A1,1,0,0,0,7,18Z"></path>
                                    </svg>
                                </div>
                            </div>
                            <span className="d-block mb-1">Pending Appointments</span>
                            <h3 className="card-title text-nowrap mb-2">50</h3>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-12 col-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title d-flex align-items-start justify-content-between">
                                <div className="avatar flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                                        <path fill="#6563FF"
                                            d="M12,14a1,1,0,1,0-1-1A1,1,0,0,0,12,14Zm5,0a1,1,0,1,0-1-1A1,1,0,0,0,17,14Zm-5,4a1,1,0,1,0-1-1A1,1,0,0,0,12,18Zm5,0a1,1,0,1,0-1-1A1,1,0,0,0,17,18ZM7,14a1,1,0,1,0-1-1A1,1,0,0,0,7,14ZM19,4H18V3a1,1,0,0,0-2,0V4H8V3A1,1,0,0,0,6,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V10H20ZM20,8H4V7A1,1,0,0,1,5,6H19a1,1,0,0,1,1,1ZM7,18a1,1,0,1,0-1-1A1,1,0,0,0,7,18Z"></path>
                                    </svg>
                                </div>
                            </div>
                            <span className="fw-semibold d-block mb-1">Completed Appointments</span>
                            <h3 className="card-title mb-2">50</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title">CUSTOMERS</h5>
                    <div className="row">
                        <div className="col-1">
                            <select className="form-select" onChange={(e) => setPerPage(e.target.value)} value={perPage}>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                                <option value="20">20</option>
                            </select>
                        </div>
                        <div className="col-3">
                            <input
                                onChange={(e) => setSearch(e.target.value)}
                                type="search"
                                className="form-control"
                                placeholder="Search..."
                                aria-label="Search"
                            />
                        </div>
                        <div className="col-3">
                            <button className="btn btn-primary">
                                <i className="bx bx-plus me-2"></i>
                                <span className="d-none d-sm-inline">New Customer</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="table-responsive text-nowrap">
                    <table className="table">
                        <thead className="table-dark">
                            <tr>
                                <th className="px-4 py-2 text-left">#</th>
                                <SortableHeader name="Name" onSort={handleSort} />
                                <SortableHeader name="Username" onSort={handleSort} />
                                <SortableHeader name="Email" onSort={handleSort} />
                                <SortableHeader name="Phone" onSort={handleSort} />
                                <th className="px-4 py-2 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>

                                </td>
                                <td>
                                    <input onChange={(e) => setSpecificSearch({ ...specificSearch, name: e.target.value })} type="search" className="form-control" placeholder="Search" />
                                </td>
                                <td>
                                    <input onChange={(e) => setSpecificSearch({ ...specificSearch, username: e.target.value })} type="search" className="form-control" placeholder="Search" />
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
                                        <td>{index + 1}</td>
                                        <td>{customer.name}</td>
                                        <td>{customer.username}</td>
                                        <td>{customer.email}</td>
                                        <td>{customer.phone}</td>
                                        <td>
                                            <div className="row">
                                                <div className="col-6">
                                                    <button type="button" className="btn btn-warning mx-1"> Edit </button>
                                                    <button type="button" className="btn btn-danger mx-1">  Delete </button>
                                                </div>
                                            </div>
                                        </td>
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


