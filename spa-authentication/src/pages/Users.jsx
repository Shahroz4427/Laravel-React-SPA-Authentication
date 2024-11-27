import Layout from "../Layout"
import { useReducer, useState } from "react";
import paginationReducer from "../reducers/paginationReducer";
import CustomersService from "../services/CustomersService";
import Pagination from "../components/Pagination";
import '../table.css'

const Users = () => {

    const [search, setSearch] = useState("")

    const [perPage, setPage] = useState("5");

    const [paginationState, dispatchPagination] = useReducer(paginationReducer, { activePage: 1 });

    const { data, isLoading, isError } = CustomersService.fetchCustomers({
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
                <div className="card-datatable table-responsive">
                    <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
                        <div className="row mx-2">
                            <div className="col-md-2">
                                <div className="me-3">
                                    <div
                                        className="dataTables_length" id="DataTables_Table_0_length"><label>
                                            <select
                                                onChange={(e) => setPage(e.target.value)}
                                                name="DataTables_Table_0_length" aria-controls="DataTables_Table_0"
                                                className="form-select">
                                                <option value="5">5</option>
                                                <option value="10">10</option>
                                                <option value="15">15</option>
                                                <option value="20">20</option>
                                            </select></label></div>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <div
                                    className="dt-action-buttons text-xl-end text-lg-start text-md-end text-start d-flex align-items-center justify-content-end flex-md-row flex-column mb-3 mb-md-0">
                                    <div id="DataTables_Table_0_filter" className="dataTables_filter"><label>
                                        <input
                                            onChange={(e) => setSearch(e.target.value)}
                                            type="search" className="form-control mx-3" placeholder="Search.."
                                            aria-controls="DataTables_Table_0" /></label></div>
                                    <div className="dt-buttons">

                                        <button className="dt-button add-new btn btn-primary"
                                            aria-controls="DataTables_Table_0" type="button"><span><i
                                                className="bx bx-plus me-0 me-sm-1"></i><span
                                                    className="d-none d-sm-inline-block">Add New Task</span></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <table className="datatables-users table border-top dataTable no-footer dtr-column"
                            id="DataTables_Table_0" aria-describedby="DataTables_Table_0_info"
                            style={{ width: "1209px" }}>
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>name</th>
                                    <th>username</th>
                                    <th>email</th>
                                    <th>street</th>
                                    <th>suite</th>
                                    <th>city</th>
                                    <th>zipcode</th>
                                    <th>lat</th>
                                    <th>lat</th>
                                    <th>phone</th>
                                    <th>website</th>
                                    <th>company</th>
                                    <th>catch_phrase</th>
                                    <th>bs</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data && data.data.map((customer, index) => (
                                        <tr key={index}>
                                            <td>{customer.id}</td>
                                            <td>{customer.name}</td>
                                            <td>{customer.username}</td>
                                            <td>{customer.email}</td>
                                            <td>{customer.address.street}</td>
                                            <td>{customer.address.suite}</td>
                                            <td>{customer.address.city}</td>
                                            <td>{customer.address.zipcode}</td>
                                            <td>{customer.address.geo.lat}</td>
                                            <td>{customer.address.geo.lat}</td>
                                            <td>{customer.phone}</td>
                                            <td>{customer.website}</td>
                                            <td>{customer.company.name}</td>
                                            <td>{customer.company.catchPhrase}</td>
                                            <td>{customer.company.bs}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        <div className="row mx-2">
                            <div className="col-sm-12 col-md-6">
                                <div className="dataTables_info" id="DataTables_Table_0_info" role="status"
                                    aria-live="polite">Showing 1 to 10 of 200 entries
                                </div>
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

            </div>
        </Layout>
    )
}

export default Users