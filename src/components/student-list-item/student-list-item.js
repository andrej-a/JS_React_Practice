
import "./student-list-item.scss";

const StudentItem = (props) => {
    

    const {name, time, index, weekDay, notice, deleteItem, toggleNotice} = props;

    const classNames = notice === true ? "list-group-item d-flex justify-content-between like" : "list-group-item d-flex justify-content-between";
    
    return(
        <li 
        onClick={(e) => toggleNotice(e)}
        data-notice={notice}
        data-weekday={weekDay}
        data-index={index} 
        className={classNames}>

            <span className="list-group-item-label">{name}</span>
            
            <div className="time">
                <h4 className="time">{time}</h4>
            </div>
            
            <div className='d-flex justify-content-center align-items-center'>
                
                <button 
                onClick={deleteItem} 
                id={index}
                data-weekday={weekDay}
                type="button"
                className="btn-trash btn-sm ">
                    
                    <i 
                    id={index} 
                    data-weekday={weekDay} 
                    className="fas fa-trash">
                    </i>

                </button>
                
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
   }

export default StudentItem;