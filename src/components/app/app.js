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
                daysArray: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
            };
        } else {
            this.state = {
                dataBase: JSON.parse(localStorage.getItem("dataBase")),
                daysArray: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
            };
        }
    }

    deleteItem = (e) => {
        if (e.target.classList.contains("fa-trash")) {
            const copyDataBase = JSON.parse(JSON.stringify(this.state.dataBase)); //deep copy
            let deletingValue = null;
            let counter = 0;

            //copyDataBase["monday"] etc.
            copyDataBase[e.target.dataset.weekday].forEach(deletingItem => {
                if (deletingItem[2] === +e.target.id) {
                    deletingValue = deletingItem;
                    copyDataBase[e.target.dataset.weekday].splice(copyDataBase[e.target.dataset.weekday].indexOf(deletingItem), 1);

                    this.state.daysArray.forEach(day => {
                        copyDataBase[day].forEach(item => {
                            if (deletingValue[0] === item[0]) {//check all DB looking for same values for
                                counter++               //deletingItem and if true counter++
                            }   
                        });
                    })

                }//if
            });//forEach

            copyDataBase.counter = copyDataBase.counter - 1;

            this.state.daysArray.forEach(day => {
                copyDataBase[day].forEach(item => {
                    if (deletingValue[0] === item[0]) { //if same values with deletingItem more then 1 so
                        counter === 1 ? item[4] = false : item[4] = true //other items[4] = true
                    }   
                });
            })

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

    checkRepeat = (data, array, value) => {
        
        this.state.daysArray.forEach(day => {
            data[day].forEach(item => {
                if (array[0] === item[0]) {
                    item[4] = value;//if the names of the cards creating before same with new card
                    array[4] = value;//so repeat = true for byOnceWeekFilters
                }   
            });
        })
        localStorage.setItem("dataBase", JSON.stringify(data));

        this.setState({
            dataBase: data
        })
        return array
    }

    createItem = (name, time, day, notice = false, repeat = false) => {
        const copyDataBase = JSON.parse(JSON.stringify(this.state.dataBase));
        
        if (!name || !time) {
            //just alert now
            alert("Вы ввели не все данные!")
        } else {
            const newCard = [name, time, copyDataBase.id++, notice, repeat]//create card
            switch (day) {
            case "Понедельник":
                if (!this.checkTimeOnDay(copyDataBase.monday, time, day)) {
                    copyDataBase.monday.push(this.checkRepeat(copyDataBase, newCard, true));
                    copyDataBase.counter = copyDataBase.counter + 1;
                }
                break;
            case "Вторник":
                    if (!this.checkTimeOnDay(copyDataBase.tuesday, time, day)) {
                        copyDataBase.tuesday.push(this.checkRepeat(copyDataBase, newCard, true));
                        copyDataBase.counter = copyDataBase.counter + 1;
                    }
                break;
            case "Среда":
                if (!this.checkTimeOnDay(copyDataBase.wednesday, time, day)) {
                    copyDataBase.wednesday.push(this.checkRepeat(copyDataBase, newCard, true));
                    copyDataBase.counter = copyDataBase.counter + 1;
                }
                break;
            case "Четверг":
                if (!this.checkTimeOnDay(copyDataBase.thursday, time, day)) {
                    copyDataBase.thursday.push(this.checkRepeat(copyDataBase, newCard, true));
                    copyDataBase.counter = copyDataBase.counter + 1;
                }
                break;
            case "Пятница":
                if (!this.checkTimeOnDay(copyDataBase.friday, time, day)) {
                    copyDataBase.friday.push(this.checkRepeat(copyDataBase, newCard, true));
                    copyDataBase.counter = copyDataBase.counter + 1;
                }
                break;
            case "Суббота":
                if (!this.checkTimeOnDay(copyDataBase.saturday, time, day)) {
                    copyDataBase.saturday.push(this.checkRepeat(copyDataBase, newCard, true));
                    copyDataBase.counter = copyDataBase.counter + 1;
                }
                break;
            case "Воскресенье":
                if (!this.checkTimeOnDay(copyDataBase.sunday, time, day)) {
                    copyDataBase.sunday.push(this.checkRepeat(copyDataBase, newCard, true));
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
            const {dataBase} = this.state;
            
            dataBase[e.currentTarget.dataset.weekday].map(item => {
                if (item[2] === +e.currentTarget.dataset.index) {
                    return [...item, item[3] = !item[3]]
                }
                    return item
            })

                this.setState(() => {
                    return {
                        dataBase: dataBase
                    }
                })

            localStorage.setItem("dataBase", JSON.stringify(dataBase));
        }
    }

    findItem = (name) => {
        if (name.length === 0) {
            return this.setState({
                dataBase: JSON.parse(localStorage.getItem("dataBase"))
            })
        } else {
            const {dataBase} = this.state;

            for (let day in dataBase) {
                if (typeof dataBase[day] === "object") {
                    dataBase[day] = dataBase[day].filter(item => item[0].toLowerCase().match(name.toLowerCase()))
                }
            }

            this.setState(() => {
                return {
                    dataBase: dataBase
                }
            })
            
        }
    }

    filterItemOnceAtWeek = () => {
        const {dataBase} = this.state;

        for (let day in dataBase) {
            if (typeof dataBase[day] === "object") {
                dataBase[day] = dataBase[day].filter(item => item[4])
            }
        }

        this.setState(() => {
            return {
                dataBase: dataBase
            }
         })
    }


    filterAllItems = () => {
        this.setState({
            dataBase: JSON.parse(localStorage.getItem("dataBase"))
        })
    }

    render() {
        
        return (
            <div className="app">
                <AppInfo counter={this.state.dataBase.counter}></AppInfo>

                <div className="search-panel">
                    <SearchPanel findItem={this.findItem}/>
                    <Filter
                    filterAllItems={this.filterAllItems} 
                    filterItemOnceAtWeek={this.filterItemOnceAtWeek}/>
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