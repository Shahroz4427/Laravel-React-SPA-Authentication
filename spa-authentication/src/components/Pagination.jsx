const Pagination = ({
    pagelinks = [],
    activeLink,
    moveToFirstPage,
    moveToLastPage,
    moveToNextPage,
    moveToPrePage,
    isLoading,
    lastPage,
}) => {
    if (isLoading) {
        return (
            <div className="row">
                <div className="col d-flex justify-content-end">
                    <div className="demo-inline-spacing">
                        <nav aria-label="Page navigation">
                            <ul className="pagination">
                                {Array(10).fill(null).map((_, index) => (
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


    const generateLinks = () => {
        const maxVisible = 5;
        const numberedLinks = pagelinks.filter(
            (link) => link.url && !isNaN(link.label)
        );
        const activeIndex = numberedLinks.findIndex((link) => link.active);
        const totalPages = numberedLinks.length;

        const links = [];
        let start = Math.max(activeIndex - Math.floor(maxVisible / 2), 0);
        let end = Math.min(start + maxVisible, totalPages);

        if (end - start < maxVisible) {
            start = Math.max(end - maxVisible, 0);
        }

        if (start > 0) {
            links.push(
                <li key="start-ellipsis" className="page-item disabled">
                    <span className="page-link">...</span>
                </li>
            );
        }
        numberedLinks.slice(start, end).forEach((link, index) => {
            links.push(
                <li
                    key={link.label}
                    className={`page-item ${link.active ? "active" : ""}`}
                >
                    <button
                        onClick={() =>
                            link.url && activeLink(parseInt(link.label, 10))
                        }
                        className="page-link"
                        disabled={!link.url}
                    >
                        {link.label}
                    </button>
                </li>
            );
        });
        if (end < totalPages) {
            links.push(
                <li key="end-ellipsis" className="page-item disabled">
                    <span className="page-link">...</span>
                </li>
            );
        }

        return links;
    };

    return (
        <div className="row">
            <div className="col d-flex justify-content-end">
                <div className="demo-inline-spacing">
                    <nav aria-label="Page navigation">
                        <ul className="pagination">
                            <li className="page-item first">
                                <button
                                    onClick={() => moveToFirstPage()}
                                    className="page-link"
                                    disabled={!pagelinks[0]?.url}
                                >
                                    <i className="tf-icon bx bx-chevrons-left"></i>
                                </button>
                            </li>
                            <li className="page-item prev">
                                <button
                                    onClick={() => moveToPrePage()}
                                    className="page-link"
                                    disabled={!pagelinks[0]?.url}
                                >
                                    <i className="tf-icon bx bx-chevron-left"></i>
                                </button>
                            </li>
                            {generateLinks()}
                            <li className="page-item next">
                                <button
                                    onClick={() => moveToNextPage()}
                                    className="page-link"
                                    disabled={!pagelinks[pagelinks.length - 1]?.url}
                                >
                                    <i className="tf-icon bx bx-chevron-right"></i>
                                </button>
                            </li>
                            <li className="page-item last">
                                <button
                                    onClick={() => moveToLastPage(lastPage)}
                                    className="page-link"
                                    disabled={!pagelinks[pagelinks.length - 1]?.url}
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




