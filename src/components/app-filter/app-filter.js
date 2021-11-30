import { Component } from "react";
import "./app-filter.scss";

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allItems: "btn btn-light",
            OnceAtWeekItems: "btn btn-outline-light"
        }
    }

    toggleActive = (e) => {
        if(e.target.dataset.toggle === "onceWeek") {
            this.setState(() => {
                return {
                    allItems: "btn btn-outline-light",
                    OnceAtWeekItems: "btn btn-light"
                }
            })
        } else {
            this.setState(() => {
                return {
                    allItems: "btn btn-light",
                    OnceAtWeekItems: "btn btn-outline-light"
                }
            }) 
        }
    }

    render() {
        return(
            <div className="btn-group">
            
            <button
            onClick={(e) => {
                this.props.filterAllItems(e);
                this.toggleActive(e);
            }} 
            type="button"
            data-toggle="all" 
            className={this.state.allItems}>
                    Все ученики
            </button>
            
            <button
            onClick={(e) => {
                this.props.filterItemOnceAtWeek(e);
                this.toggleActive(e);
            }} 
            type="button" 
            data-toggle="onceWeek" 
            className={this.state.OnceAtWeekItems}>
                    Больше одного занятия в неделю
            </button>
            
        </div>
        )
    }
}

export default Filter;