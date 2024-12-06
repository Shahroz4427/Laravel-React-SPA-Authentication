import Layout from "../Layout"
import { useReducer, useState } from "react";
import paginationReducer from "../reducers/paginationReducer";
import CustomersService from "../services/CustomersService";
import Pagination from "../components/Pagination";
import SortableHeader from "../components/SortableHeader";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/dist/sweetalert2.min.css';
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

    const [globalSearch, setGlobalSearch] = useState({ "filter[search]": "" });

    const [perPage, setPerPage] = useState("5");

    const [paginationState, dispatchPagination] = useReducer(paginationReducer, { activePage: 1 });

    const [specificSearch, setSpecificSearch] = useState({ "filter[name]": "", "filter[username]": "", "filter[email]": "" });

    const [sort, setSort] = useState();

    const { data, isLoading } = CustomersService.fetchCustomers({
        ...globalSearch,
        ...specificSearch,
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

    const showAlert = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this ',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then((result) => {
            if (result.value) {


            } else if (result.dismiss === Swal.DismissReason.cancel) {

            }
        })
    }


    return (
        <Layout>
            <div className="row g-6 mb-6">
                <div className="col-sm-6 col-xl-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex align-items-start justify-content-between">
                                <div className="content-left">
                                    <span className="text-heading">Customers</span>
                                    <div className="d-flex align-items-center my-1">
                                        <h4 className="mb-0 me-2">4</h4>
                                        <p className="text-success mb-0">(100%)</p>
                                    </div>
                                    <small className="mb-0">Total Customers</small>
                                </div>
                                <div className="avatar">
                                    <span className="avatar-initial rounded bg-label-primary">
                                        <i className="bx bx-user bx-lg"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex align-items-start justify-content-between">
                                <div className="content-left">
                                    <span className="text-heading">Verified Customers</span>
                                    <div className="d-flex align-items-center my-1">
                                        <h4 className="mb-0 me-2">0</h4>
                                        <p className="text-success mb-0">(+95%)</p>
                                    </div>
                                    <small className="mb-0">Recent analytics </small>
                                </div>
                                <div className="avatar">
                                    <span className="avatar-initial rounded bg-label-success">
                                        <i className="bx bx-user-check bx-lg"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex align-items-start justify-content-between">
                                <div className="content-left">
                                    <span className="text-heading">Duplicate Customers</span>
                                    <div className="d-flex align-items-center my-1">
                                        <h4 className="mb-0 me-2">0</h4>
                                        <p className="text-success mb-0">(0%)</p>
                                    </div>
                                    <small className="mb-0">Recent analytics</small>
                                </div>
                                <div className="avatar">
                                    <span className="avatar-initial rounded bg-label-danger">
                                        <i className="bx bx-group bx-lg"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex align-items-start justify-content-between">
                                <div className="content-left">
                                    <span className="text-heading">Verification Pending</span>
                                    <div className="d-flex align-items-center my-1">
                                        <h4 className="mb-0 me-2">4</h4>
                                        <p className="text-danger mb-0">(+6%)</p>
                                    </div>
                                    <small className="mb-0">Recent analytics</small>
                                </div>
                                <div className="avatar">
                                    <span className="avatar-initial rounded bg-label-warning">
                                        <i className="bx bx-user-voice bx-lg"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title">CUSTOMERS</h5>
                    <div className="row align-items-center">
                        <div className="col-auto">
                            <label>
                                <select
                                    name="DataTables_Table_0_length"
                                    aria-controls="DataTables_Table_0"
                                    className="form-select mx-2"
                                    onChange={(e) => setPerPage(e.target.value)}
                                    value={perPage}
                                >
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="15">15</option>
                                    <option value="20">20</option>
                                </select>
                            </label>
                        </div>

                        <div className="col-auto d-flex align-items-center ms-auto">
                            <input
                                onChange={(e) => setGlobalSearch({ ...globalSearch, "filter[search]": e.target.value })}
                                type="search"
                                className="form-control me-2"
                                style={{ width: '200px' }}  // Adjust the input width to prevent it from stretching
                                placeholder="Search..."
                                aria-label="Search"
                            />
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
                                    <input type="checkbox" className="dt-checkboxes form-check-input" />
                                </td>
                                <td>
                                    <input style={{ width: '250px' }} onChange={(e) => setSpecificSearch({ ...specificSearch, "filter[name]": e.target.value })} type="search" className="form-control" placeholder="Search" />
                                </td>
                                <td>
                                    <input style={{ width: '250px' }} onChange={(e) => setSpecificSearch({ ...specificSearch, "filter[username]": e.target.value })} type="search" className="form-control" placeholder="Search" />
                                </td>
                                <td>
                                    <input style={{ width: '250px' }} onChange={(e) => setSpecificSearch({ ...specificSearch, "filter[email]": e.target.value })} type="search" className="form-control" placeholder="Search" />
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
                                        <td><input type="checkbox" className="dt-checkboxes form-check-input" /></td>
                                        <td>{customer.name}</td>
                                        <td>{customer.username}</td>
                                        <td>{customer.email}</td>
                                        <td>{customer.phone}</td>
                                        <td>
                                            <div className="row">
                                                <div className="col-6">
                                                    <button type="button" className="btn btn-warning mx-1"> Edit </button>
                                                    <button onClick={showAlert} type="button" className="btn btn-danger mx-1">Delete</button>
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
                        <div className="col-sm-12 col-md-6 py-5">
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


