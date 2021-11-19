import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import Filter from "../app-filter/app-filter";
import Days from "../days/days";
import StudentAddForm from "../student-add-form/student-add-form";

import "./app.css";

const dataBase = {
    monday: [
        ["Vienna", "10:00", 1],
        ["Ia", "15:00", 2],
        ["Vera", "09:00", 3],
    ],
    tuesday: [
        ["Liza", "12:00", 1],
        ["Mia", "15:00", 2],
    ],
    wednesday: [
        ["Liza", "12:00", 1],
        ["Gleb", "14:00", 2]
    ],
    thursday: [
        ["Liza", "12:00", 1],
        ["Marat", "12:25", 2],
        ["Liza", "12:00", 3],
    ],
    friday: [
        ["Marat", "12:25", 1],
        ["Vera", "09:00", 2],
    ],
    saturday: [
        ["Gleb", "14:00", 1],
        ["Marat", "12:25", 2],
    ],
    sunday: [
        ["Gleb", "14:00", 1],
        ["Vera", "09:00", 2],
    ],
}

class App extends Component {   
    constructor(props) {
        super(props);
        this.state = {
            dataBase: dataBase
        };
    }

    deleteItem = (e) => {
        const copyDataBase = JSON.parse(JSON.stringify(this.state.dataBase)); //deep copy
            //copyDataBase["monday"] etc.
           copyDataBase[e.target.dataset.weekday].forEach(item => {
           if (item[2] === +e.target.id) {
               copyDataBase[e.target.dataset.weekday].splice(copyDataBase[e.target.dataset.weekday].indexOf(item), 1);
           }
       })
       return copyDataBase;
    }

    changeState = (e) => {
        if (e.target.classList.contains("fa-trash")) {
            this.setState(({state}) => ({
            dataBase: this.deleteItem(e)
        }))
        }
    }

    render() {
        return(
            <div className="app">
                <AppInfo></AppInfo>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <Filter/>
                </div>
    
                <div className="day-items">
                    <Days 
                    dataBase = {this.state.dataBase}
                    onDelete={(e) => {this.changeState(e)}}/>
                </div>
    
                <StudentAddForm/>
    
            </div>//app
        )
    }
}

export default App;