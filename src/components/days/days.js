import StudentItem from "../student-list-item/student-list-item";
import "./days.css";



const Days = () => {
    const days = ["Понедельник", "Вторник"];
    
    const dataBase = {
        "Понедельник": [
            ["Vienna", "10:00"],
            ["Rima", "11:00"],
            ["Anton", "18:00"]
        ],

        "Вторник": [
            ["Vlad", "13:00"],
        ]
    };

    const cr = () =>{
        for (let data in dataBase) {
            days.forEach(day => {
                if (data === day) {
                   let elem = dataBase[day].map(item => {
                    
                        return (
                            <div className="day">
                    <div className="day-heading">
                        <h2>{day}</h2>
                    </div>
                    <div className="day-item">
                        <div className="day-inner">
                            <StudentItem name={item[0]} time={item[1]}/>
                        </div>
                    </div>
                </div>
                        )
                    })
                    return elem;
                }
            });
        }
    }

    console.log(cr());

    return (
        <div className="days-wrapper">
            
            {cr()}
            

            <div className="day">
                <div className="day-heading">
                    <h2>Среда</h2>
                </div>
                <div className="day-item">
                    <div className="day-inner">
                        <StudentItem name="Liza" time="20:00"/>
                    </div>
                </div>
            </div>

            <div className="day">
                <div className="day-heading">
                    <h2>Четверг</h2>
                </div>
                <div className="day-item">
                    <div className="day-inner">
                        <StudentItem name="Marat" time="18:00"/>
                    </div>
                </div>
            </div>

            <div className="day">
                <div className="day-heading">
                    <h2>Пятница</h2>
                </div>
                <div className="day-item">
                    <div className="day-inner">
                        <StudentItem name="Liza" time="10:00"/>
                    </div>
                </div>
            </div>

            <div className="day">
                <div className="day-heading">
                    <h2>Суббота</h2>
                </div>
                <div className="day-item">
                    <div className="day-inner">
                        <StudentItem name="Vlad" time="14:50"/>
                    </div>
                </div>
            </div>

            <div className="day">
                <div className="day-heading">
                    <h2>Воскресенье</h2>
                </div>
                <div className="day-item">
                    <div className="day-inner">
                        <StudentItem name="Rima" time="11:00"/>
                    </div>
                </div>
            </div>
        </div>//days-wrapper
    )
}

export default Days;