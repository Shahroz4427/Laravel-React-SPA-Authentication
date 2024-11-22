const Pagination = ({ pagelinks = [], activeLink, last_page, moveToLastPage, moveToFirstPage, moveToNextPage, moveToPrePage }) => {

    const links = pagelinks.map((link, index) => {
        if (link.label === '&laquo; Previous' || link.label === 'Next &raquo;') {
            return null;
        }
        return (
            <li key={index} className={link.active ? 'page-item active' : 'page-item'}>
                <button type="button" onClick={() => activeLink(parseInt(link.label, 10))} className="page-link">
                    {link.label}
                </button>
            </li>
        );
    });

    return (
        <>
            <div className="row">
                <div className="col d-flex justify-content-end">
                    <div className="demo-inline-spacing">
                        <nav aria-label="Page navigation">
                            <ul className="pagination">
                                <li className="page-item first mx-sm-n2">
                                    <button onClick={() => moveToFirstPage()} className="page-link" ><i className="tf-icon bx bx-chevrons-left"></i></button>
                                </li>
                                <li>
                                    <button onClick={() => moveToPrePage()} className="page-link mx-0" >Previous</button>
                                </li>
                                {links}
                                <li>
                                    <button onClick={() => moveToNextPage()} className="page-link mx-1" >Next</button>
                                </li>
                                <li className="page-item last mx-sm-n2">
                                    <button onClick={() => moveToLastPage(last_page)} className="page-link" ><i className="tf-icon bx bx-chevrons-right"></i></button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );

}
export default Pagination;