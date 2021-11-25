import "./app-filter.css";

const Filter = (props) => {
    return(
        <div className="btn-group">
            <button
            onClick={props.filterAllItems} 
            type="button" 
            className="btn btn-light">
                    Все ученики
            </button>
            
            <button
            onClick={props.filterItemOnceAtWeek} 
            type="button" 
            className="btn btn-outline-light">
                    Больше одного занятия в неделю
            </button>
            
        </div>
    )
}

export default Filter;