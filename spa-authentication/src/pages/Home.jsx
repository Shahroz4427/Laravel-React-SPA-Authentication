
import Layout from '../Layout';


const Home = () => {


  return (
    <Layout>
      {/* <div className="card">
        <div className="card-datatable table-responsive">
          <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
            <div className="card-header flex-column flex-md-row pb-0">
              <div className="head-label text-center">
                <h5 className="card-title mb-0">DataTable with Buttons</h5>
              </div>
              <div className="dt-action-buttons text-end pt-6 pt-md-0">
                <div className="dt-buttons btn-group flex-wrap">
                  <div className="btn-group"><button className="btn buttons-collection dropdown-toggle btn-label-primary me-4" tabIndex="0" aria-controls="DataTables_Table_0" type="button" aria-haspopup="dialog" aria-expanded="false"><span><i className="bx bx-export bx-sm me-sm-2"></i> <span className="d-none d-sm-inline-block">Export</span></span></button></div>
                  <button className="btn btn-secondary create-new btn-primary" tabIndex="0" aria-controls="DataTables_Table_0" type="button"><span><i className="bx bx-plus bx-sm me-sm-2"></i> <span className="d-none d-sm-inline-block">Add New Record</span></span></button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div className="dataTables_length" id="DataTables_Table_0_length">
                  <label>
                    Show
                    <select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" className="form-select">
                      <option value="7">7</option>
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="75">75</option>
                      <option value="100">100</option>
                    </select>
                    entries
                  </label>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end mt-n6 mt-md-0">
                <div id="DataTables_Table_0_filter" className="dataTables_filter"><label>Search:<input type="search" className="form-control" placeholder="" aria-controls="DataTables_Table_0" /></label></div>
              </div>
            </div>
            <table className="datatables-basic table border-top dataTable no-footer dtr-column" id="DataTables_Table_0" aria-describedby="DataTables_Table_0_info" style={{ width: "1391px" }}>
              <thead>
                <tr>
                  <th className="control sorting_disabled dtr-hidden" rowSpan="1" colSpan="1" style={{ width: "0px", display: "none" }} aria-label=""></th>
                  <th className="sorting_disabled dt-checkboxes-cell dt-checkboxes-select-all" rowSpan="1" colSpan="1" style={{ width: "18px" }} data-col="1" aria-label=""><input type="checkbox" className="form-check-input" /></th>
                  <th className="sorting" tabIndex="0" aria-controls="DataTables_Table_0" rowSpan="1" colSpan="1" style={{ width: "316px" }} aria-label="Name: activate to sort column ascending">Name</th>
                  <th className="sorting" tabIndex="0" aria-controls="DataTables_Table_0" rowSpan="1" colSpan="1" style={{ width: "300px" }} aria-label="Email: activate to sort column ascending">Email</th>
                  <th className="sorting" tabIndex="0" aria-controls="DataTables_Table_0" rowSpan="1" colSpan="1" style={{ width: "106px" }} aria-label="Date: activate to sort column ascending">Date</th>
                  <th className="sorting" tabIndex="0" aria-controls="DataTables_Table_0" rowSpan="1" colSpan="1" style={{ width: "104px" }} aria-label="Salary: activate to sort column ascending">Salary</th>
                  <th className="sorting" tabIndex="0" aria-controls="DataTables_Table_0" rowSpan="1" colSpan="1" style={{ width: "125px" }} aria-label="Status: activate to sort column ascending">Status</th>
                  <th className="sorting_disabled" rowSpan="1" colSpan="1" style={{ width: "116px" }} aria-label="Actions">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd">
                  <td className="  control" tabIndex="0" style={{ display: "none" }}></td>
                  <td className="  dt-checkboxes-cell"><input type="checkbox" className="dt-checkboxes form-check-input" /></td>
                  <td>
                    <div className="d-flex justify-content-start align-items-center user-name">
                      <div className="avatar-wrapper">
                        <div className="avatar me-2"><span className="avatar-initial rounded-circle bg-label-info">GG</span></div>
                      </div>
                      <div className="d-flex flex-column"><span className="emp_name text-truncate">Glyn Giacoppo</span><small className="emp_post text-truncate text-muted">Software Test Engineer</small></div>
                    </div>
                  </td>
                  <td>ggiacoppo2r@apache.org</td>
                  <td>04/15/2021</td>
                  <td>$24973.48</td>
                  <td><span className="badge  bg-label-success">Professional</span></td>
                  <td>
                    <div className="d-inline-block">
                      <a href='#' className="btn btn-icon dropdown-toggle hide-arrow me-1" data-bs-toggle="dropdown" aria-expanded="false"><i className="bx bx-dots-vertical-rounded bx-md"></i></a>
                      <ul className="dropdown-menu dropdown-menu-end m-0" >
                        <li><a href='#' className="dropdown-item">Details</a></li>
                        <li><a href='#' className="dropdown-item">Archive</a></li>
                        <div className="dropdown-divider"></div>
                        <li><a href='#' className="dropdown-item text-danger delete-record">Delete</a></li>
                      </ul>
                    </div>
                    <a href='#' className="btn btn-icon item-edit"><i className="bx bx-edit bx-md"></i></a>
                  </td>
                </tr>
                <tr className="even">
                  <td className="  control" tabIndex="0" style={{ display: "none" }}></td>
                  <td className="  dt-checkboxes-cell"><input type="checkbox" className="dt-checkboxes form-check-input" /></td>
                  <td>
                    <div className="d-flex justify-content-start align-items-center user-name">
                      <div className="avatar-wrapper">
                        <div className="avatar me-2"><img src="../../assets/img/avatars/10.png" alt="Avatar" className="rounded-circle" /></div>
                      </div>
                      <div className="d-flex flex-column"><span className="emp_name text-truncate">Evangelina Carnock</span><small className="emp_post text-truncate text-muted">Cost Accountant</small></div>
                    </div>
                  </td>
                  <td>ecarnock2q@washington.edu</td>
                  <td>01/26/2021</td>
                  <td>$23704.82</td>
                  <td><span className="badge  bg-label-warning">Resigned</span></td>
                  <td>
                    <div className="d-inline-block">
                      <a href='#' className="btn btn-icon dropdown-toggle hide-arrow me-1" data-bs-toggle="dropdown" aria-expanded="false"><i className="bx bx-dots-vertical-rounded bx-md"></i></a>
                      <ul className="dropdown-menu dropdown-menu-end m-0" >
                        <li><a href='#' className="dropdown-item">Details</a></li>
                        <li><a href='#' className="dropdown-item">Archive</a></li>
                        <div className="dropdown-divider"></div>
                        <li><a href='#' className="dropdown-item text-danger delete-record">Delete</a></li>
                      </ul>
                    </div>
                    <a href='#' className="btn btn-icon item-edit"><i className="bx bx-edit bx-md"></i></a>
                  </td>
                </tr>
                <tr className="odd">
                  <td className="  control" tabIndex="0" style={{ display: "none" }}></td>
                  <td className="  dt-checkboxes-cell"><input type="checkbox" className="dt-checkboxes form-check-input" /></td>
                  <td>
                    <div className="d-flex justify-content-start align-items-center user-name">
                      <div className="avatar-wrapper">
                        <div className="avatar me-2"><img src="../../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" /></div>
                      </div>
                      <div className="d-flex flex-column"><span className="emp_name text-truncate">Olivette Gudgin</span><small className="emp_post text-truncate text-muted">Paralegal</small></div>
                    </div>
                  </td>
                  <td>ogudgin2p@gizmodo.com</td>
                  <td>04/09/2021</td>
                  <td>$15211.60</td>
                  <td><span className="badge  bg-label-success">Professional</span></td>
                  <td>
                    <div className="d-inline-block">
                      <a href='#' className="btn btn-icon dropdown-toggle hide-arrow me-1" data-bs-toggle="dropdown"><i className="bx bx-dots-vertical-rounded bx-md"></i></a>
                      <ul className="dropdown-menu dropdown-menu-end m-0">
                        <li><a href='#' className="dropdown-item">Details</a></li>
                        <li><a href='#' className="dropdown-item">Archive</a></li>
                        <div className="dropdown-divider"></div>
                        <li><a href='#' className="dropdown-item text-danger delete-record">Delete</a></li>
                      </ul>
                    </div>
                    <a href='#' className="btn btn-icon item-edit"><i className="bx bx-edit bx-md"></i></a>
                  </td>
                </tr>
                <tr className="even">
                  <td className="  control" tabIndex="0" style={{ display: "none" }}></td>
                  <td className="  dt-checkboxes-cell"><input type="checkbox" className="dt-checkboxes form-check-input" /></td>
                  <td>
                    <div className="d-flex justify-content-start align-items-center user-name">
                      <div className="avatar-wrapper">
                        <div className="avatar me-2"><span className="avatar-initial rounded-circle bg-label-info">RP</span></div>
                      </div>
                      <div className="d-flex flex-column"><span className="emp_name text-truncate">Reina Peckett</span><small className="emp_post text-truncate text-muted">Quality Control Specialist</small></div>
                    </div>
                  </td>
                  <td>rpeckett2o@timesonline.co.uk</td>
                  <td>05/20/2021</td>
                  <td>$16619.40</td>
                  <td><span className="badge  bg-label-warning">Resigned</span></td>
                  <td>
                    <div className="d-inline-block">
                      <a href='#' className="btn btn-icon dropdown-toggle hide-arrow me-1" data-bs-toggle="dropdown"><i className="bx bx-dots-vertical-rounded bx-md"></i></a>
                      <ul className="dropdown-menu dropdown-menu-end m-0">
                        <li><a href='#' className="dropdown-item">Details</a></li>
                        <li><a href='#' className="dropdown-item">Archive</a></li>
                        <div className="dropdown-divider"></div>
                        <li><a href='#' className="dropdown-item text-danger delete-record">Delete</a></li>
                      </ul>
                    </div>
                    <a href='#' className="btn btn-icon item-edit"><i className="bx bx-edit bx-md"></i></a>
                  </td>
                </tr>
                <tr className="odd">
                  <td className="  control" tabIndex="0" style={{ display: "none" }}></td>
                  <td className="  dt-checkboxes-cell"><input type="checkbox" className="dt-checkboxes form-check-input" /></td>
                  <td>
                    <div className="d-flex justify-content-start align-items-center user-name">
                      <div className="avatar-wrapper">
                        <div className="avatar me-2"><span className="avatar-initial rounded-circle bg-label-primary">AB</span></div>
                      </div>
                      <div className="d-flex flex-column"><span className="emp_name text-truncate">Alaric Beslier</span><small className="emp_post text-truncate text-muted">Tax Accountant</small></div>
                    </div>
                  </td>
                  <td>abeslier2n@zimbio.com</td>
                  <td>04/16/2021</td>
                  <td>$19366.53</td>
                  <td><span className="badge  bg-label-warning">Resigned</span></td>
                  <td>
                    <div className="d-inline-block">
                      <a href='#' className="btn btn-icon dropdown-toggle hide-arrow me-1" data-bs-toggle="dropdown"><i className="bx bx-dots-vertical-rounded bx-md"></i></a>
                      <ul className="dropdown-menu dropdown-menu-end m-0">
                        <li><a href='#' className="dropdown-item">Details</a></li>
                        <li><a href='#' className="dropdown-item">Archive</a></li>
                        <div className="dropdown-divider"></div>
                        <li><a href='#' className="dropdown-item text-danger delete-record">Delete</a></li>
                      </ul>
                    </div>
                    <a href='#' className="btn btn-icon item-edit"><i className="bx bx-edit bx-md"></i></a>
                  </td>
                </tr>
                <tr className="even">
                  <td className="control" tabIndex="0" style={{ display: "none" }}></td>
                  <td className="dt-checkboxes-cell"><input type="checkbox" className="dt-checkboxes form-check-input" /></td>
                  <td>
                    <div className="d-flex justify-content-start align-items-center user-name">
                      <div className="avatar-wrapper">
                        <div className="avatar me-2"><img src="../../assets/img/avatars/2.png" alt="Avatar" className="rounded-circle" /></div>
                      </div>
                      <div className="d-flex flex-column"><span className="emp_name text-truncate">Edwina Ebsworth</span><small className="emp_post text-truncate text-muted">Human Resources Assistant</small></div>
                    </div>
                  </td>
                  <td>eebsworth2m@sbwire.com</td>
                  <td>09/27/2021</td>
                  <td>$19586.23</td>
                  <td><span className="badge bg-label-primary">Current</span></td>
                  <td>
                    <div className="d-inline-block">
                      <a href='#' className="btn btn-icon dropdown-toggle hide-arrow me-1" data-bs-toggle="dropdown"><i className="bx bx-dots-vertical-rounded bx-md"></i></a>
                      <ul className="dropdown-menu dropdown-menu-end m-0">
                        <li><a href='#' className="dropdown-item">Details</a></li>
                        <li><a href='#' className="dropdown-item">Archive</a></li>
                        <div className="dropdown-divider"></div>
                        <li><a href='#' className="dropdown-item text-danger delete-record">Delete</a></li>
                      </ul>
                    </div>
                    <a href='#' className="btn btn-icon item-edit"><i className="bx bx-edit bx-md"></i></a>
                  </td>
                </tr>
                <tr className="odd">
                  <td className="  control" tabIndex="0" style={{ display: "none" }}></td>
                  <td className="  dt-checkboxes-cell"><input type="checkbox" className="dt-checkboxes form-check-input" /></td>
                  <td>
                    <div className="d-flex justify-content-start align-items-center user-name">
                      <div className="avatar-wrapper">
                        <div className="avatar me-2"><span className="avatar-initial rounded-circle bg-label-dark">RH</span></div>
                      </div>
                      <div className="d-flex flex-column"><span className="emp_name text-truncate">Ronica Hasted</span><small className="emp_post text-truncate text-muted">Software Consultant</small></div>
                    </div>
                  </td>
                  <td>rhasted2l@hexun.com</td>
                  <td>07/04/2021</td>
                  <td>$24866.66</td>
                  <td><span className="badge  bg-label-warning">Resigned</span></td>
                  <td>
                    <div className="d-inline-block">
                      <a href='#' className="btn btn-icon dropdown-toggle hide-arrow me-1" data-bs-toggle="dropdown"><i className="bx bx-dots-vertical-rounded bx-md"></i></a>
                      <ul className="dropdown-menu dropdown-menu-end m-0">
                        <li><a href='#' className="dropdown-item">Details</a></li>
                        <li><a href='#' className="dropdown-item">Archive</a></li>
                        <div className="dropdown-divider"></div>
                        <li><a href='#' className="dropdown-item text-danger delete-record">Delete</a></li>
                      </ul>
                    </div>
                    <a href='#' className="btn btn-icon item-edit"><i className="bx bx-edit bx-md"></i></a>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div className="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">Showing 1 to 7 of 100 entries</div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate">
                  <ul className="pagination">
                    <li className="paginate_button page-item previous disabled" id="DataTables_Table_0_previous"><a aria-controls="DataTables_Table_0" aria-disabled="true" role="link" data-dt-idx="previous" tabIndex="-1" className="page-link"><i className="bx bx-chevron-left bx-18px"></i></a></li>
                    <li className="paginate_button page-item active"><a href="#" aria-controls="DataTables_Table_0" role="link" aria-current="page" data-dt-idx="0" tabIndex="0" className="page-link">1</a></li>
                    <li className="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0" role="link" data-dt-idx="1" tabIndex="0" className="page-link">2</a></li>
                    <li className="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0" role="link" data-dt-idx="2" tabIndex="0" className="page-link">3</a></li>
                    <li className="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0" role="link" data-dt-idx="3" tabIndex="0" className="page-link">4</a></li>
                    <li className="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0" role="link" data-dt-idx="4" tabIndex="0" className="page-link">5</a></li>
                    <li className="paginate_button page-item disabled" id="DataTables_Table_0_ellipsis"><a aria-controls="DataTables_Table_0" aria-disabled="true" role="link" data-dt-idx="ellipsis" tabIndex="-1" className="page-link">…</a></li>
                    <li className="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0" role="link" data-dt-idx="14" tabIndex="0" className="page-link">15</a></li>
                    <li className="paginate_button page-item next" id="DataTables_Table_0_next"><a href="#" aria-controls="DataTables_Table_0" role="link" data-dt-idx="next" tabIndex="0" className="page-link"><i className="bx bx-chevron-right bx-18px"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div style={{ width: "1%" }}></div>
          </div>
        </div>
      </div> */}
    </Layout>
  )
}

export default Home