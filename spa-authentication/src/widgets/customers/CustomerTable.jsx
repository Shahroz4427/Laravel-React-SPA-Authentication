import ActionsDropDown from "../../components/ActionsDropDown";
import SortableHeader from "../../components/SortableHeader";
import Pagination from "../../components/Pagination";
import { useState } from "react";
import '../../table.css'
import { Link } from "react-router-dom";

const CustomerTable = ({
    data,
    meta,
    isLoading,
    pagination: { perPage, setPerPage, handleSetPage, handlePrePage, handleNextPage },
    sorting: { handleSort },
    search: { handleFilters, setGlobalSearch },
    onDeleteAlert,
    onOpenCanvas,
}) => {

    const [checkedRows, setCheckedRows] = useState({});

    const handleCheckboxChange = (id) => {
        setCheckedRows((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    const isAllChecked = data?.length > 0 && data.every((customer) => checkedRows[customer.id]);

    const toggleAllCheckboxes = () => {
        const allChecked = !isAllChecked;
        const newCheckedState = {};
        data.forEach((customer) => {
            newCheckedState[customer.id] = allChecked;
        });
        setCheckedRows(newCheckedState);
    };

    return (
        <div className="card">
            <div className="card-header">
                <h5 className="card-title">CUSTOMERS</h5>
                <div className="row align-items-center">
                    <div className="col-auto">
                        <label>
                            <select
                                style={{ height: '35px', width: '75px' }}
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
                        <tr className="align-middle">
                            <th className="px-4 py-2 ">#</th>
                            <SortableHeader name="Name" onSort={handleSort} />
                            <SortableHeader name="Username" onSort={handleSort} />
                            <SortableHeader name="Email" onSort={handleSort} />
                            <SortableHeader name="Phone" onSort={handleSort} />
                            <th className="px-4 py-2 ">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input
                                    checked={isAllChecked}
                                    onChange={toggleAllCheckboxes}
                                    type="checkbox"
                                    className="dt-checkboxes form-check-input"
                                />
                            </td>
                            <td>
                                <input
                                    style={{ width: "200px" }}
                                    onChange={(e) => handleFilters("name", e.target.value)}
                                    type="search"
                                    className="form-control"
                                    placeholder="Search"
                                />
                            </td>
                            <td>
                                <input
                                    style={{ width: "200px" }}
                                    onChange={(e) => handleFilters("username", e.target.value)}
                                    type="search"
                                    className="form-control"
                                    placeholder="Search"
                                />
                            </td>
                            <td>
                                <input
                                    style={{ width: "200px" }}
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
                                    {Array(6)
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
                                        <input
                                            type="checkbox"
                                            className="dt-checkboxes form-check-input"
                                            checked={!!checkedRows[customer.id]}
                                            onChange={() => handleCheckboxChange(customer.id)}
                                        />
                                    </td>
                                    <td>{customer.name}</td>
                                    <td>{customer.username}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.phone}</td>
                                    <td>
                                        <ActionsDropDown>
                                            <li>
                                                <Link className="dropdown-item" to={`/customers/${customer.id}/edit`}>Edit</Link>
                                            </li>
                                            <li>
                                                <a onClick={() => onDeleteAlert(customer.id)} className=" dropdown-item" >
                                                    Delete
                                                </a>
                                            </li>
                                        </ActionsDropDown>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
            <div className="card-footer">
                <div className="row" >
                    <div className="col-md-6">
                        <span style={{ lineHeight: '3' }}>
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

export default CustomerTable;




