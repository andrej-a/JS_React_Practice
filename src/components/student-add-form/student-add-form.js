import { Component } from "react";

import "./student-add-form.css";


class StudentAddForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            time: "",
            day: "Понедельник",
        };
    }
    //установить данные
    onSetDates = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    
    createItem = (e) => {
        e.preventDefault();
        
        this.props.createItem(this.state.name, this.state.time, this.state.day);

        this.setState({
            name: "",
            time: "",
            day: "Понедельник",
        })
    }

    render() {           
        const {name, time, day} = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавить нового уеника</h3>
                <form
                    onSubmit={(e) => {this.createItem(e)}}
                    className="add-form d-flex">
                    <input 
                        onChange={this.onSetDates} 
                        type="text"
                        className="form-control new-post-label"
                        name="name"
                        value={name}
                        placeholder="Как его зовут?" />
                    
                    <input 
                        onChange={this.onSetDates} 
                        type="time"
                        className="form-control new-post-label"
                        name="time"
                        value={time}
                     />
    
                    <select  
                        onChange={this.onSetDates} 
                        size="1" 
                        name="day"
                        value={day}>
                        <option defaultValue>Понедельник</option>
                        <option>Вторник</option>
                        <option>Среда</option>
                        <option>Четверг</option>
                        <option>Пятница</option>
                        <option>Суббота</option>
                        <option>Воскресенье</option>
                    </select>
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }//render
}

export default StudentAddForm;