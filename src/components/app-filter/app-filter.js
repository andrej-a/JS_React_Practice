import "./app-filter.css";

const Filter = () => {
    return(
        <div className="btn-group">
            <button type="button" className="btn btn-light">
                    Все ученики
            </button>
            <button type="button" className="btn btn-outline-light">
                    Больше одного занятия в неделю
            </button>
            <button type="button" className="btn btn-outline-light">
                    Больше трёх занятий в неделю
            </button>
        </div>
    )
}

export default Filter;