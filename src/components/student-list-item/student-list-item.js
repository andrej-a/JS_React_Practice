import {Component} from "react";
import "./student-list-item.css";

class StudentItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            like: false
        };
    }
    setLike = (e) => {
        this.setState(({like}) => ({
            like: !like
        }))
    };

    render() {
    const {name, time} = this.props;
    const {like} = this.state;
    let classNames = "list-group-item d-flex justify-content-between";
    
    if (like) {
        classNames += " like";
    }
    return(
        <li onClick={(e) => this.setLike(e)} className={classNames}>
            <span className="list-group-item-label">{name}</span>
            
            <div className="time">
                <h4 className="time">{time}</h4>
            </div>
            
            <div className='d-flex justify-content-center align-items-center'>
                
                <button type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
   }
}

export default StudentItem;