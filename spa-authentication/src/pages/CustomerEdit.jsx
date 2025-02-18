import { Link } from "react-router-dom"
import Layout from "../layout/Layout"
const CustomerEdit = () => {
  return (
    <Layout>
      <div className="container-xxl flex-grow-1 container-p-y">
        <nav className="mx-1" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to={"/customers"}>Customers</Link>
            </li>
            <li className="breadcrumb-item">
              <span className="text-muted">Edit</span>
            </li>
          </ol>
        </nav>
        <div className="row">
        <div className="col-xxl">
            <div className="card mb-4">
              <div className="card-header d-flex align-items-center justify-content-between">
                <h5 className="mb-0">Basic with Icons</h5>
                <small className="text-muted float-end">Merged input group</small>
              </div>
              <div className="card-body">
                <form>
                  <div className="row mb-3">
                    <label
                      className="col-sm-2 col-form-label"
                      htmlFor="basic-icon-default-fullname"
                    >
                      Name
                    </label>
                    <div className="col-sm-10">
                      <div className="input-group input-group-merge">
                        <span
                          id="basic-icon-default-fullname2"
                          className="input-group-text"
                        >
                          <i className="bx bx-user" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          id="basic-icon-default-fullname"
                          placeholder="John Doe"
                          aria-label="John Doe"
                          aria-describedby="basic-icon-default-fullname2"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      className="col-sm-2 col-form-label"
                      htmlFor="basic-icon-default-company"
                    >
                      Company
                    </label>
                    <div className="col-sm-10">
                      <div className="input-group input-group-merge">
                        <span
                          id="basic-icon-default-company2"
                          className="input-group-text"
                        >
                          <i className="bx bx-buildings" />
                        </span>
                        <input
                          type="text"
                          id="basic-icon-default-company"
                          className="form-control"
                          placeholder="ACME Inc."
                          aria-label="ACME Inc."
                          aria-describedby="basic-icon-default-company2"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      className="col-sm-2 col-form-label"
                      htmlFor="basic-icon-default-email"
                    >
                      Email
                    </label>
                    <div className="col-sm-10">
                      <div className="input-group input-group-merge">
                        <span className="input-group-text">
                          <i className="bx bx-envelope" />
                        </span>
                        <input
                          type="text"
                          id="basic-icon-default-email"
                          className="form-control"
                          placeholder="john.doe"
                          aria-label="john.doe"
                          aria-describedby="basic-icon-default-email2"
                        />
                        <span
                          id="basic-icon-default-email2"
                          className="input-group-text"
                        >
                          @example.com
                        </span>
                      </div>
                      <div className="form-text">
                        You can use letters, numbers &amp; periods
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      className="col-sm-2 form-label"
                      htmlFor="basic-icon-default-phone"
                    >
                      Phone No
                    </label>
                    <div className="col-sm-10">
                      <div className="input-group input-group-merge">
                        <span
                          id="basic-icon-default-phone2"
                          className="input-group-text"
                        >
                          <i className="bx bx-phone" />
                        </span>
                        <input
                          type="text"
                          id="basic-icon-default-phone"
                          className="form-control phone-mask"
                          placeholder="658 799 8941"
                          aria-label="658 799 8941"
                          aria-describedby="basic-icon-default-phone2"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      className="col-sm-2 form-label"
                      htmlFor="basic-icon-default-message"
                    >
                      Message
                    </label>
                    <div className="col-sm-10">
                      <div className="input-group input-group-merge">
                        <span
                          id="basic-icon-default-message2"
                          className="input-group-text"
                        >
                          <i className="bx bx-comment" />
                        </span>
                        <textarea
                          id="basic-icon-default-message"
                          className="form-control"
                          placeholder="Hi, Do you have a moment to talk Joe?"
                          aria-label="Hi, Do you have a moment to talk Joe?"
                          aria-describedby="basic-icon-default-message2"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-end">
                    <div className="col-sm-10">
                      <button type="submit" className="btn btn-primary">
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-xxl">
            <div className="card mb-4">
              <div className="card-header d-flex align-items-center justify-content-between">
                <h5 className="mb-0">Basic with Icons</h5>
                <small className="text-muted float-end">Merged input group</small>
              </div>
              <div className="card-body">
                <form>
                  <div className="row mb-3">
                    <label
                      className="col-sm-2 col-form-label"
                      htmlFor="basic-icon-default-fullname"
                    >
                      Name
                    </label>
                    <div className="col-sm-10">
                      <div className="input-group input-group-merge">
                        <span
                          id="basic-icon-default-fullname2"
                          className="input-group-text"
                        >
                          <i className="bx bx-user" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          id="basic-icon-default-fullname"
                          placeholder="John Doe"
                          aria-label="John Doe"
                          aria-describedby="basic-icon-default-fullname2"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      className="col-sm-2 col-form-label"
                      htmlFor="basic-icon-default-company"
                    >
                      Company
                    </label>
                    <div className="col-sm-10">
                      <div className="input-group input-group-merge">
                        <span
                          id="basic-icon-default-company2"
                          className="input-group-text"
                        >
                          <i className="bx bx-buildings" />
                        </span>
                        <input
                          type="text"
                          id="basic-icon-default-company"
                          className="form-control"
                          placeholder="ACME Inc."
                          aria-label="ACME Inc."
                          aria-describedby="basic-icon-default-company2"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      className="col-sm-2 col-form-label"
                      htmlFor="basic-icon-default-email"
                    >
                      Email
                    </label>
                    <div className="col-sm-10">
                      <div className="input-group input-group-merge">
                        <span className="input-group-text">
                          <i className="bx bx-envelope" />
                        </span>
                        <input
                          type="text"
                          id="basic-icon-default-email"
                          className="form-control"
                          placeholder="john.doe"
                          aria-label="john.doe"
                          aria-describedby="basic-icon-default-email2"
                        />
                        <span
                          id="basic-icon-default-email2"
                          className="input-group-text"
                        >
                          @example.com
                        </span>
                      </div>
                      <div className="form-text">
                        You can use letters, numbers &amp; periods
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      className="col-sm-2 form-label"
                      htmlFor="basic-icon-default-phone"
                    >
                      Phone No
                    </label>
                    <div className="col-sm-10">
                      <div className="input-group input-group-merge">
                        <span
                          id="basic-icon-default-phone2"
                          className="input-group-text"
                        >
                          <i className="bx bx-phone" />
                        </span>
                        <input
                          type="text"
                          id="basic-icon-default-phone"
                          className="form-control phone-mask"
                          placeholder="658 799 8941"
                          aria-label="658 799 8941"
                          aria-describedby="basic-icon-default-phone2"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      className="col-sm-2 form-label"
                      htmlFor="basic-icon-default-message"
                    >
                      Message
                    </label>
                    <div className="col-sm-10">
                      <div className="input-group input-group-merge">
                        <span
                          id="basic-icon-default-message2"
                          className="input-group-text"
                        >
                          <i className="bx bx-comment" />
                        </span>
                        <textarea
                          id="basic-icon-default-message"
                          className="form-control"
                          placeholder="Hi, Do you have a moment to talk Joe?"
                          aria-label="Hi, Do you have a moment to talk Joe?"
                          aria-describedby="basic-icon-default-message2"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-end">
                    <div className="col-sm-10">
                      <button type="submit" className="btn btn-primary">
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default CustomerEdit