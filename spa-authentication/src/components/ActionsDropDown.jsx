

const ActionsDropDown = ({ children }) => {
    return (
        <div className="btn-group">
            <button
                type="button"
                className="btn btn-primary btn-icon rounded-pill dropdown-toggle hide-arrow"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <i className="bx bx-dots-vertical-rounded" />
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
                {children}
            </ul>
        </div>
    )
}

export default ActionsDropDown

