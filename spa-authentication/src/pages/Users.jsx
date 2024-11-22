import Layout from "../Layout"
import '../table.css'
const Users = () => {
    return (
        <Layout>
            <div className="card">
                {/* <div className="card-header border-bottom">
                    <h5 className="card-title">Search Filter</h5>
                    <div className="d-flex justify-content-between align-items-center row py-3 gap-3 gap-md-0">
                        <div className="col-md-4 user_role"><select id="UserRole"
                            className="form-select text-capitalize">
                            <option value="">Select Status</option>
                            <option value="pending">Pending</option>
                            <option value="processing">Processing</option>
                            <option value="completed">Completed</option>
                        </select></div>
                        <div className="col-md-4 user_plan"><select id="UserPlan"
                            className="form-select text-capitalize">
                            <option value=""> Select Priority</option>
                            <option value="Basic">high</option>
                            <option value="Company">medium</option>
                            <option value="Enterprise">low</option>
                        </select></div>
                        <div className="col-md-4 user_status"><select id="FilterTransaction"
                            className="form-select text-capitalize">
                            <option value=""> Select Progress</option>
                            <option value="100" className="text-capitalize">100%</option>
                            <option value="80" className="text-capitalize">80%</option>
                            <option value="60" className="text-capitalize">60%</option>
                            <option value="40" className="text-capitalize">40%</option>
                            <option value="20" className="text-capitalize">20%</option>
                        </select></div>
                    </div>
                </div> */}
                <div className="card-datatable table-responsive">
                    <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
                        <div className="row mx-2">
                            <div className="col-md-2">
                                <div className="me-3">
                                    <div
                                        className="dataTables_length" id="DataTables_Table_0_length"><label><select
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
                                    <th>title</th>
                                    <th>description</th>
                                    <th>status</th>
                                    <th>priority</th>
                                    <th>progress</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {
                                    data && data.tasks.data.map((task, index) => (
                                        <tr key={index} className="odd">
                                            <td className="  control" tabIndex="0" style={{ display: "none" }}></td>
                                            <td className="sorting_1">
                                                {task.title}
                                            </td>
                                            <td>{task.description}</td>
                                            <td><span className="badge bg-label-warning">{task.status}</span></td>
                                            <td><span className="badge bg-label-danger">{task.priority}</span></td>
                                            <td>
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-striped bg-primary"
                                                        role="progressbar" style={{ width: `${task.progress}%` }}
                                                        aria-valuenow="20"
                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-inline-block text-nowrap">
                                                    <button className="btn btn-sm btn-icon"><i className="bx bx-edit"></i>
                                                    </button>
                                                    <button className="btn btn-sm btn-icon delete-record"><i
                                                        className="bx bx-trash"></i></button>
                                                    <button className="btn btn-sm btn-icon dropdown-toggle hide-arrow"
                                                        data-bs-toggle="dropdown"><i
                                                            className="bx bx-dots-vertical-rounded me-2"></i></button>
                                                    <div className="dropdown-menu dropdown-menu-end m-0"><a
                                                        href="#" className="dropdown-item">View</a><a
                                                            href="#" className="dropdown-item">Suspend</a></div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                } */}
                            </tbody>
                        </table>
                        <div className="row mx-2">
                            <div className="col-sm-12 col-md-6">
                                <div className="dataTables_info" id="DataTables_Table_0_info" role="status"
                                    aria-live="polite">Showing 1 to 10 of 200 entries
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                {/* <Pagination
                                    pagelinks={data && data.tasks.links}
                                    activeLink={(page) => handleSetPage(page)}
                                    last_page={data && data.tasks.last_page}
                                    moveToLastPage={(lastPage) => handleSetPage(lastPage)}
                                    moveToFirstPage={() => handleSetPage(1)}
                                    moveToPrePage={handlePrePage}
                                    moveToNextPage={handleNextPage}
                                /> */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default Users