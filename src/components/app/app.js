import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import Filter from "../app-filter/app-filter";
import Days from "../days/days";
import StudentAddForm from "../student-add-form/student-add-form";

import "./app.css";

const dataBase = {
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
let id = 0;
class App extends Component {   
    constructor(props) {
        super(props);
        if (!localStorage.getItem("dataBase")) {
            this.state = {
                dataBase: dataBase
            }; 
        } else {
            this.state = {
                dataBase: JSON.parse(localStorage.getItem("dataBase"))
            };
        }
        
    }

    deleteItem = (e) => {
        const copyDataBase = JSON.parse(JSON.stringify(this.state.dataBase)); //deep copy
            //copyDataBase["monday"] etc.
           copyDataBase[e.target.dataset.weekday].forEach(item => {
           if (item[2] === +e.target.id) {
               copyDataBase[e.target.dataset.weekday].splice(copyDataBase[e.target.dataset.weekday].indexOf(item), 1);
           }
       });
       localStorage.setItem("dataBase", JSON.stringify(copyDataBase));
       return copyDataBase;
    }

    changeState = (e) => {
        if (e.target.classList.contains("fa-trash")) {
            this.setState(({state}) => ({
            dataBase: this.deleteItem(e)
        }))
        }
    }

        
    createItem = (name, time, day) => {
        const copyDataBase = JSON.parse(JSON.stringify(this.state.dataBase));
        const item = [name, time, id++]
        
        switch (day) {
            case "Понедельник":
                copyDataBase.monday.push(item); 
                break;
            case "Вторник":
                copyDataBase.tuesday.push(item);
                break;
            case "Среда":
                copyDataBase.wednesday.push(item);
                break;
            case "Четверг":
                copyDataBase.thursday.push(item);
                break;
            case "Пятница":
            copyDataBase.friday.push(item);
            break;
            case "Суббота":
                copyDataBase.saturday.push(item);
                break;
            case "Воскресенье":
                copyDataBase.sunday.push(item);
                break;
            default:
                break;
        }
        localStorage.setItem("dataBase", JSON.stringify(copyDataBase));
        return copyDataBase;
    }

    addItem = (name, time, day) => {
        this.setState(({state}) => ({
            dataBase: this.createItem(name, time, day)
        }))
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
                    onDelete={(e) => {this.changeState(e)}}
                    />
                </div>
    
                <StudentAddForm 
                addItem={this.addItem}
                />
    
            </div>//app
        )
    }
}

export default App;