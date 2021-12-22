import React, { Component } from "react";

import "./student-add-form.scss";


class StudentAddForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            time: "",
            day: "Понедельник",
            objectDay: "monday",
        };
        this.myRef = React.createRef();
    }
    //set data for inputs
    onSetDates = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    //set data for select bcs we need data-*
    getOption = (e) => {
        this.onSetDates(e);
        //check options of selected
        //each item === option
        e.target.childNodes.forEach(item => {
            if (item.innerText === e.target.value) {
                this.dataDay = item.dataset.day;
            }
        })

        return this.setState({
            objectDay: this.dataDay
        })
    }
    
    createItem = (e) => {
        e.preventDefault();
        
        const {name, time, day, objectDay} = this.state;

        this.props.createItem(name, time, day, objectDay);

        this.setState({
            name: "",
            time: "",
            day: "Понедельник",
            objectDay: "monday",
        })
    }

    onFocus = () => {
        this.myRef.current.focus();
    }

    componentDidMount() {
        this.onFocus();
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
                        ref={this.myRef} 
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
                        onChange={this.getOption}
                        size="1" 
                        name="day"
                        value={day}>
                        <option data-day="monday" defaultValue>Понедельник</option>
                        <option data-day="tuesday">Вторник</option>
                        <option data-day="wednesday">Среда</option>
                        <option data-day="thursday">Четверг</option>
                        <option data-day="friday">Пятница</option>
                        <option data-day="saturday">Суббота</option>
                        <option data-day="sunday">Воскресенье</option>
                    </select>
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }//render
}

export default StudentAddForm;