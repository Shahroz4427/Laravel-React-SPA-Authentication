import { useEffect, useState } from 'react';

const OffCanvas = ({ title, children, isOpen, onClose }) => {
    const [visible, setVisible] = useState(isOpen);

    useEffect(() => {
        if (isOpen) {
            setVisible(true);
        } else {
            const timer = setTimeout(() => setVisible(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    return (
        <>
            {visible && <div className="offcanvas-backdrop fade show" onClick={onClose}></div>}
            <div
                className={`offcanvas offcanvas-end ${isOpen ? 'show' : ''}`}
                aria-modal="true"
                role="dialog"
                style={{ visibility: visible ? 'visible' : 'hidden' }}
            >
                <div className="offcanvas-header border-bottom">
                    <h5 className="offcanvas-title">{title}</h5>
                    <button
                        type="button"
                        className="btn-close text-reset"
                        aria-label="Close"
                        onClick={onClose}
                    ></button>
                </div>
                <div className="offcanvas-body flex-grow-1">{children}</div>
            </div>
        </>
    );
};

export default OffCanvas;
