import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import Filter from "../app-filter/app-filter";
import Days from "../days/days";
import StudentAddForm from "../student-add-form/student-add-form";

import "./app.css";

const dataBase = {
    id: 0,
    counter: 0,

    monday: [

    ],
    tuesday: [

    ],
    wednesday: [

    ],
    thursday: [

    ],
    friday: [

    ],
    saturday: [

    ],
    sunday: [

    ],
}

class App extends Component {
    constructor(props) {
        super(props);
        if (!localStorage.getItem("dataBase")) {
            this.state = {
                dataBase: dataBase,
            };
        } else {
            this.state = {
                dataBase: JSON.parse(localStorage.getItem("dataBase")),
            };
        }
    }

    deleteItem = (e) => {
        if (e.target.classList.contains("fa-trash")) {
            const copyDataBase = JSON.parse(JSON.stringify(this.state.dataBase)); //deep copy
            //copyDataBase["monday"] etc.
            copyDataBase[e.target.dataset.weekday].forEach(item => {
                if (item[2] === +e.target.id) {
                    copyDataBase[e.target.dataset.weekday].splice(copyDataBase[e.target.dataset.weekday].indexOf(item), 1);
                }
            });
            copyDataBase.counter = copyDataBase.counter - 1;
            localStorage.setItem("dataBase", JSON.stringify(copyDataBase));

            this.setState({
                dataBase: copyDataBase
            })

        }
    }
    //check a time on day (free or busy already) for createItem
    checkTimeOnDay = (array, time, day,) => {
        let flag = false;
        array.forEach(item => {
            if (item[1] === time) {
                alert(`Это время ${time} в этот день ${day} уже занято!`)
                flag = true;
            }
        })
        return flag;
    }

    createItem = (name, time, day, notice = false) => {
        const copyDataBase = JSON.parse(JSON.stringify(this.state.dataBase));
        
        if (!name || !time) {
            alert("Вы ввели не все данные!")
        } else {
            const item = [name, time, copyDataBase.id++, notice]
            switch (day) {
            case "Понедельник":
                if (!this.checkTimeOnDay(copyDataBase.monday, time, day)) {
                    copyDataBase.monday.push(item);
                    copyDataBase.counter = copyDataBase.counter + 1;
                }
                break;
            case "Вторник":
                if (!this.checkTimeOnDay(copyDataBase.tuesday, time, day)) {
                    copyDataBase.tuesday.push(item);
                    copyDataBase.counter = copyDataBase.counter + 1;
                }
                break;
            case "Среда":
                if (!this.checkTimeOnDay(copyDataBase.wednesday, time, day)) {
                    copyDataBase.wednesday.push(item);
                    copyDataBase.counter = copyDataBase.counter + 1;
                }
                break;
            case "Четверг":
                if (!this.checkTimeOnDay(copyDataBase.thursday, time, day)) {
                    copyDataBase.thursday.push(item);
                    copyDataBase.counter = copyDataBase.counter + 1;
                }
                break;
            case "Пятница":
                if (!this.checkTimeOnDay(copyDataBase.friday, time, day)) {
                    copyDataBase.friday.push(item);
                    copyDataBase.counter = copyDataBase.counter + 1;
                }
                break;
            case "Суббота":
                if (!this.checkTimeOnDay(copyDataBase.saturday, time, day)) {
                    copyDataBase.saturday.push(item);
                    copyDataBase.counter = copyDataBase.counter + 1;
                }
                break;
            case "Воскресенье":
                if (!this.checkTimeOnDay(copyDataBase.sunday, time, day)) {
                    copyDataBase.sunday.push(item);
                    copyDataBase.counter = copyDataBase.counter + 1;
                }
                break;
            default:
                break;
            }
        }

        localStorage.setItem("dataBase", JSON.stringify(copyDataBase));

        this.setState(({ state }) => ({
            dataBase: copyDataBase
        }))
    }

    toggleNotice = (e) => {
            if (!e.target.classList.contains("fa-trash")) {
                const copyDataBase = JSON.parse(JSON.stringify(this.state.dataBase));
                
                copyDataBase[e.currentTarget.dataset.weekday].forEach(item => {
                    if (item[2] === +e.currentTarget.dataset.index) {
                        item[3] = !item[3]
                    }
                })

                this.setState(({dataBase}) => ({
                    dataBase: copyDataBase
                }))

                localStorage.setItem("dataBase", JSON.stringify(copyDataBase));
            }
    }

    findItem = (name) => {
        const copyDataBase = JSON.parse(JSON.stringify(this.state.dataBase));
        const searchingDataBase = JSON.parse(JSON.stringify(copyDataBase));
        const array = [];
        for (let week in searchingDataBase) {
            if (typeof (searchingDataBase[week]) === "object") {
                searchingDataBase[week].forEach(item => {
                    if (item[0].match(name)) {
                        array.push(item)
                        console.log(array);
                    }
                })
            }
        }

    }

    render() {
        return (
            <div className="app">
                <AppInfo counter={this.state.dataBase.counter}></AppInfo>

                <div className="search-panel">
                    <SearchPanel findItem={this.findItem}/>
                    <Filter />
                </div>

                <div className="day-items">
                    <Days
                        dataBase={this.state.dataBase}
                        deleteItem={(e) => { this.deleteItem(e) }}
                        toggleNotice={(e) => { this.toggleNotice(e) }}
                    />
                </div>

                <StudentAddForm
                    createItem={this.createItem}
                />

            </div>//app
        )
    }
}


export default App;