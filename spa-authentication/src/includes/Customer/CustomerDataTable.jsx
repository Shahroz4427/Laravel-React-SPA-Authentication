import SortableHeader from "../../components/SortableHeader";
import Pagination from "../../components/Pagination";
import "../../table.css";

const CustomerDataTable = ({
    data,
    meta,
    isLoading,
    pagination: { perPage, setPerPage, handleSetPage, handlePrePage, handleNextPage },
    sorting: { handleSort },
    search: { handleFilters, setGlobalSearch },
    onDeleteAlert,
    onOpenCanvas,
}) => {
    return (
        <div className="card">
            <div className="card-header">
                <h5 className="card-title">CUSTOMERS</h5>
                <div className="row align-items-center">
                    <div className="col-auto">
                        <label>
                            <select
                                name="rowsPerPage"
                                className="form-select mx-2"
                                onChange={(e) => setPerPage(e.target.value)}
                                value={perPage}
                            >
                                {[5, 10, 15, 20].map((num) => (
                                    <option key={num} value={num}>
                                        {num}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>

                    <div className="col-auto d-flex align-items-center ms-auto">
                        <input
                            onChange={(e) => setGlobalSearch({ "filter[search]": e.target.value })}
                            type="search"
                            className="form-control me-2"
                            style={{ width: "200px" }}
                            placeholder="Search..."
                            aria-label="Search"
                        />
                        <button onClick={onOpenCanvas} className="btn btn-primary">
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
                            <th className="px-4 py-3 text-left just">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input type="checkbox" className="dt-checkboxes form-check-input" />
                            </td>
                            <td>
                                <input
                                    style={{ width: "250px" }}
                                    onChange={(e) => handleFilters("name", e.target.value)}
                                    type="search"
                                    className="form-control"
                                    placeholder="Search"
                                />
                            </td>
                            <td>
                                <input
                                    style={{ width: "250px" }}
                                    onChange={(e) => handleFilters("username", e.target.value)}
                                    type="search"
                                    className="form-control"
                                    placeholder="Search"
                                />
                            </td>
                            <td>
                                <input
                                    style={{ width: "250px" }}
                                    onChange={(e) => handleFilters("email", e.target.value)}
                                    type="search"
                                    className="form-control"
                                    placeholder="Search"
                                />
                            </td>
                        </tr>
                        {isLoading ? (
                            Array.from({ length: perPage }).map((_, index) => (
                                <tr key={index}>
                                    {Array(5)
                                        .fill(null)
                                        .map((_, i) => (
                                            <td key={i} className="skeleton-row"></td>
                                        ))}
                                </tr>
                            ))
                        ) : (
                            data?.map((customer, index) => (
                                <tr key={index}>
                                    <td>
                                        <input type="checkbox" className="dt-checkboxes form-check-input" />
                                    </td>
                                    <td>{customer.name}</td>
                                    <td>{customer.username}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.phone}</td>
                                    <td>
                                        <div className="d-flex">
                                            <button type="button" className="btn btn-warning mx-1">
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => onDeleteAlert(customer.id)}
                                                type="button"
                                                className="btn btn-danger mx-1"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            <div className="card-footer">
                <div className="row">
                    <div className="col-md-6 py-2">
                        <span>
                            Showing {meta?.from || 0} to {meta?.to || 0} of {meta?.total || 0} entries
                        </span>
                    </div>
                    <div className="col-md-6">
                        <Pagination
                            isLoading={isLoading}
                            pagelinks={meta?.links}
                            lastPage={meta?.last_page}
                            activeLink={(page) => handleSetPage(page)}
                            moveToLastPage={(lastPage) => handleSetPage(lastPage)}
                            moveToFirstPage={() => handleSetPage(1)}
                            moveToPrePage={handlePrePage}
                            moveToNextPage={handleNextPage}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerDataTable;




// import SortableHeader from "../../components/SortableHeader";
// import Pagination from "../../components/Pagination";
// import '../../table.css'

// const CustomerDataTable = ({
//     dataTableData,
//     dataTableMeta,
//     dataTableSetPerPage,
//     dataTablePerPage,
//     dataTableIsLoading,
//     dataTableDeleteAlert,
//     dataTableGlobalSearch,
//     dataTableOpenCanvas,
//     dataTableHandleSort,
//     dataTableSetSpecificSearchName,
//     dataTableSetSpecificSearchUsername,
//     dataTableSetSpecificSearchEmail,
//     dataTableHandleLastPage,
//     dataTableHandleActivePage,
//     dataTableHandleFirstPage,
//     dataTableHandlePrePage,
//     dataTableHandleNextPage,
// }) => {
//     return (
//         <>
//             <div className="card">
//                 <div className="card-header">
//                     <h5 className="card-title">CUSTOMERS</h5>
//                     <div className="row align-items-center">
//                         <div className="col-auto">
//                             <label>
//                                 <select
//                                     name="DataTables_Table_0_length"
//                                     aria-controls="DataTables_Table_0"
//                                     className="form-select mx-2"
//                                     onChange={(e) => dataTableSetPerPage(e.target.value)}
//                                     value={dataTablePerPage}
//                                 >
//                                     <option value="5">5</option>
//                                     <option value="10">10</option>
//                                     <option value="15">15</option>
//                                     <option value="20">20</option>
//                                 </select>
//                             </label>
//                         </div>

//                         <div className="col-auto d-flex align-items-center ms-auto">
//                             <input
//                                 onChange={(e) => dataTableGlobalSearch(e.target.value)}
//                                 type="search"
//                                 className="form-control me-2"
//                                 style={{ width: '200px' }}
//                                 placeholder="Search..."
//                                 aria-label="Search"
//                             />
//                             <button onClick={dataTableOpenCanvas} className="btn btn-primary" aria-controls="DataTables_Table_0" tabIndex="0">
//                                 <i className="bx bx-plus me-2"></i>
//                                 <span className="d-none d-sm-inline">New Customer</span>
//                             </button>
//                         </div>
//                     </div>

//                 </div>
//                 <div className="table-responsive text-nowrap">
//                     <table className="table">
//                         <thead className="table-dark">
//                             <tr>
//                                 <th className="px-4 py-2 text-left">#</th>
//                                 <SortableHeader name="Name" onSort={dataTableHandleSort} />
//                                 <SortableHeader name="Username" onSort={dataTableHandleSort} />
//                                 <SortableHeader name="Email" onSort={dataTableHandleSort} />
//                                 <SortableHeader name="Phone" onSort={dataTableHandleSort} />
//                                 <th className="px-4 py-2 text-left just">Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td>
//                                     <input type="checkbox" className="dt-checkboxes form-check-input" />
//                                 </td>
//                                 <td>
//                                     <input style={{ width: '250px' }} onChange={(e) => dataTableSetSpecificSearchName(e.target.value)} type="search" className="form-control" placeholder="Search" />
//                                 </td>
//                                 <td>
//                                     <input style={{ width: '250px' }} onChange={(e) => dataTableSetSpecificSearchUsername(e.target.value)} type="search" className="form-control" placeholder="Search" />
//                                 </td>
//                                 <td>
//                                     <input style={{ width: '250px' }} onChange={(e) => dataTableSetSpecificSearchEmail(e.target.value)} type="search" className="form-control" placeholder="Search" />
//                                 </td>
//                             </tr>
//                             {dataTableIsLoading ? (
//                                 Array.from({ length: dataTablePerPage }).map((_, index) => (
//                                     <tr key={index}>
//                                         <td className="skeleton-row"></td>
//                                         <td className="skeleton-row"></td>
//                                         <td className="skeleton-row"></td>
//                                         <td className="skeleton-row"></td>
//                                         <td className="skeleton-row"></td>
//                                         <td className="skeleton-row"></td>
//                                         <td className="skeleton-row"></td>
//                                     </tr>
//                                 ))
//                             ) : (
//                                 dataTableData?.map((customer, index) => (
//                                     <tr key={index}>
//                                         <td><input type="checkbox" className="dt-checkboxes form-check-input" /></td>
//                                         <td>{customer.name}</td>
//                                         <td>{customer.username}</td>
//                                         <td>{customer.email}</td>
//                                         <td>{customer.phone}</td>
//                                         <td>
//                                             <div className="row">
//                                                 <div className="col-6">
//                                                     <button type="button" className="btn btn-warning mx-1"> Edit </button>
//                                                     <button onClick={() => dataTableDeleteAlert(customer.id)} type="button" className="btn btn-danger mx-1">Delete</button>
//                                                 </div>
//                                             </div>
//                                         </td>
//                                     </tr>
//                                 ))
//                             )}
//                         </tbody>
//                     </table>
//                 </div>
//                 <div className="card-footer">
//                     <div className="row mx-2 ">
//                         <div className="col-sm-12 col-md-6 py-5">
//                             <div className="dataTables_info">Showing {dataTableData && dataTableMeta.from} to {dataTableData && dataTableMeta.to} of {dataTableData && dataTableMeta.total} entries</div>
//                         </div>
//                         <div className="col-sm-12 col-md-6">
//                             <Pagination
//                                 isLoading={dataTableIsLoading}
//                                 pagelinks={dataTableData && dataTableMeta.links}
//                                 activeLink={(page) => dataTableHandleActivePage(page)}
//                                 last_page={dataTableData && dataTableMeta.last_page}
//                                 moveToLastPage={(lastPage) => dataTableHandleLastPage(lastPage)}
//                                 moveToFirstPage={() => dataTableHandleFirstPage()}
//                                 moveToPrePage={dataTableHandlePrePage}
//                                 moveToNextPage={dataTableHandleNextPage}
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default CustomerDataTable