import "./student-list-item.css";

const StudentItem = () => {
    return(
        <li className="list-group-item d-flex justify-content-between">
            <span className="list-group-item-label">Name Surname</span>
            <div className='d-flex justify-content-center align-items-center'>
                
                <button type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default StudentItem;