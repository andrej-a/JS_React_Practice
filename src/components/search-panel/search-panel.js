import { Component } from "react";
import "./search-panel.css"

class SearchPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ""
        }
    }

    onSetDates = (e) => {
        e.preventDefault()
        
        this.setState({
            name: e.target.value
        });

        this.props.findItem(this.state.name)
    }


    render() {
        return(
            <input 
            onChange={this.onSetDates}
            type="text"
            name="name"
            className="form-control search-input"
            placeholder="Найти ученика..." 
            />
        );
    }
};

export default SearchPanel;