const CustomerCards = () => {
    return (
        <>
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
        </>
    )
}

export default CustomerCards