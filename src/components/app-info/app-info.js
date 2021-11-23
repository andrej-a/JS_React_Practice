
import "./app-info.css";

const AppInfo = ({counter}) => {
    return(
        <div className="app-info">
            <h1>Расписание занятий</h1>
            <h2>Общее число учеников: {counter}</h2>
        </div>
    )
}

export default AppInfo;