

const ActionsDropDown = () => {
    return (
        <>
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
        </>
    )
}

export default ActionsDropDown