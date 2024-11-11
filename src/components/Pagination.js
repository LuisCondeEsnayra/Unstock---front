import classes from './Pagination.module.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className={classes.pagination}>
            <button 
                onClick={() => onPageChange(1)} 
                disabled={currentPage === 1}
            >
                First
            </button>
            <button 
                onClick={() => onPageChange(currentPage - 1)} 
                disabled={currentPage === 1}
            >
                Previous
            </button>
            {[...Array(totalPages)].map((_, index) => (
                <button 
                    key={index} 
                    onClick={() => onPageChange(index + 1)} 
                    className={currentPage === index + 1 ? classes.active : ''}
                >
                    {index + 1}
                </button>
            ))}
            <button 
                onClick={() => onPageChange(currentPage + 1)} 
                disabled={currentPage === totalPages}
            >
                Next
            </button>
            <button 
                onClick={() => onPageChange(totalPages)} 
                disabled={currentPage === totalPages}
            >
                Last
            </button>
        </div>
    );
};
export default Pagination;