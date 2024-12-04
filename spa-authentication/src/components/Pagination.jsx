const Pagination = ({ 
    pagelinks = [], 
    activeLink, 
    last_page, 
    moveToLastPage, 
    moveToFirstPage, 
    moveToNextPage, 
    moveToPrePage, 
    isLoading 
}) => {

    if (isLoading) {
        return (
            <div className="row">
                <div className="col d-flex justify-content-end">
                    <div className="demo-inline-spacing">
                        <nav aria-label="Page navigation">
                            <ul className="pagination">
                                {Array(8).fill(null).map((_, index) => (
                                    <li key={index} className="page-item skeleton">
                                        <div className="page-link skeleton-loader" />
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }

    const links = pagelinks.map((link, index) => {
        if (link.label === '&laquo; Previous' || link.label === 'Next &raquo;') {
            return null;
        }
        return (
            <li key={index} className={link.active ? 'page-item active' : 'page-item'}>
                <button onClick={() => activeLink(parseInt(link.label, 10))} className="page-link">
                    {link.label}
                </button>
            </li>
        );
    });

    return (
        <div className="row">
            <div className="col d-flex justify-content-end">
                <div className="demo-inline-spacing">
                    <nav aria-label="Page navigation">
                        <ul className="pagination">
                            <li className="page-item first">
                                <button 
                                    onClick={() => moveToFirstPage()} 
                                    className="page-link first"
                                >
                                    <i className="tf-icon bx bx-chevrons-left"></i>
                                </button>
                            </li>
                            <li className="page-item prev">
                                <button 
                                    onClick={() => moveToPrePage()} 
                                    className="page-link prev"
                                >
                                    <i className="tf-icon bx bx-chevron-left"></i>
                                </button>
                            </li>
                            {links}
                            <li className="page-item next">
                                <button 
                                    onClick={() => moveToNextPage()} 
                                    className="page-link next"
                                >
                                    <i className="tf-icon bx bx-chevron-right"></i>
                                </button>
                            </li>
                            <li className="page-item last">
                                <button 
                                    onClick={() => moveToLastPage(last_page)} 
                                    className="page-link last"
                                >
                                    <i className="tf-icon bx bx-chevrons-right"></i>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Pagination;
