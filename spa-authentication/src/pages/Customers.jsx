import Layout from "../Layout"
import { useReducer, useState } from "react";
import paginationReducer from "../reducers/paginationReducer";
import CustomersService from "../services/CustomersService";
import Pagination from "../components/Pagination";
import '../table.css'

const Customers = () => {

    const [search, setSearch] = useState("")

    const [perPage, setPage] = useState("5");

    const [paginationState, dispatchPagination] = useReducer(paginationReducer, { activePage: 1 });

    const { data, isLoading, isFetching, isError } = CustomersService.fetchCustomers({
        search,
        perPage,
        page: paginationState.activePage,
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


    return (
        <Layout>
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title">CUSTOMERS</h5>
                </div>
                <div className="table-responsive text-nowrap">
                    <table className="table">
                        <thead className="table-dark">
                            <tr>
                                <th>name</th>
                                <th>email</th>
                                <th>city</th>
                                <th>zipcode</th>
                                <th>phone</th>
                                <th>company</th>
                                <th>actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input type="search" className="form-control" placeholder="Search" />
                                </td>
                                <td>
                                    <input type="search" className="form-control" placeholder="Search" />
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
                                        <td>
                                            <div className="dropdown">
                                                <button
                                                    type="button"
                                                    className="btn p-0 dropdown-toggle hide-arrow"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    <i className="bx bx-dots-vertical-rounded"></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item">
                                                        <i className="bx bx-edit-alt me-1"></i> Edit
                                                    </a>
                                                    <a className="dropdown-item">
                                                        <i className="bx bx-trash me-1"></i> Delete
                                                    </a>
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


