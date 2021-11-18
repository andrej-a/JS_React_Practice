import StudentItem from "../student-list-item/student-list-item";
import "./days.css";


const Days = ({dataBase, onDelete}) => {

    let {monday, tuesday, wednesday, thursday, friday, saturday, sunday} = dataBase;

    const sortCards = (array) => {
        array.sort(function (a, b) {
            if (a.props.time > b.props.time) {
              return 1;
            }
            if (a.props.time < b.props.time) {
              return -1;
            }
            return 0;
          });
    };
    
    const createCards = (array, sortByTime = true) => {
        const cards = [];
        
        array.map(item => {
            return cards.push(<StudentItem 
                key={item[2]} 
                name={item[0]} 
                time={item[1]}
                onDelete={onDelete}
                />);
        });

        if (sortByTime) {
            sortCards(cards);
        }
          
        return cards;
    }
    
    return (
        <div className="days-wrapper">
            <div className="day">
                <div className="day-heading">
                    <h2>Понедельник</h2>
                </div>
                <div className="day-item">
                    <div className="day-inner">
                        {createCards(monday)}
                    </div>
                </div>
            </div>

            <div className="day">
                <div className="day-heading">
                    <h2>Вторник</h2>
                </div>
                <div className="day-item">
                    <div className="day-inner">
                        {createCards(tuesday)}
                    </div>
                </div>
            </div>
                        
            <div className="day">
                <div className="day-heading">
                    <h2>Среда</h2>
                </div>
                <div className="day-item">
                    <div className="day-inner">
                    {createCards(wednesday)}
                    </div>
                </div>
            </div>

            <div className="day">
                <div className="day-heading">
                    <h2>Четверг</h2>
                </div>
                <div className="day-item">
                    <div className="day-inner">
                    {createCards(thursday)}
                    </div>
                </div>
            </div>

            <div className="day">
                <div className="day-heading">
                    <h2>Пятница</h2>
                </div>
                <div className="day-item">
                    <div className="day-inner">
                    {createCards(friday)}
                    </div>
                </div>
            </div>

            <div className="day">
                <div className="day-heading">
                    <h2>Суббота</h2>
                </div>
                <div className="day-item">
                    <div className="day-inner">
                    {createCards(saturday)}
                    </div>
                </div>
            </div>

            <div className="day">
                <div className="day-heading">
                    <h2>Воскресенье</h2>
                </div>
                <div className="day-item">
                    <div className="day-inner">
                    {createCards(sunday)}
                    </div>
                </div>
            </div>
        </div>//days-wrapper
    )
}

export default Days;