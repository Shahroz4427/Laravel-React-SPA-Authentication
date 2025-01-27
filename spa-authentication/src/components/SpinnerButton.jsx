
const Button = ({ processing = false, children, handleClick }) => {
    return (
        <button
            onClick={handleClick}
            type="submit"
            className={`btn btn-primary ${processing ? "text-white-50" : ""}`}
            disabled={processing}
        >
            {processing && (
                <div className="spinner-border spinner-border-sm" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            )}
            {children}
        </button>
    );
};

export default Button;
