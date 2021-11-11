import StudentItem from "../student-list-item/student-list-item";
import "./days.css";
const Days = () => {
    return(
        <div className="day">
            <div className="day-heading">
                <h2>Понедельник</h2>
            </div>
            <div className="day-item">
                <div className="day-inner">
                    <StudentItem/>
                </div>
            </div>
        </div>
    )
}

export default Days;