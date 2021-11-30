import { Component } from "react";
import "./search-panel.scss"

class SearchPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ""
        }
    }

    onSetDates = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    render() {
        return(
            <input 
            onChange={(e) => {
                this.onSetDates(e)
                this.props.findItem(e.target.value)
            }}
            value={this.state.name}
            type="text"
            className="form-control search-input"
            placeholder="Найти ученика..." 
            />
        );
    }
};

export default SearchPanel;