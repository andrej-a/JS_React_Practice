import "./modalWindow.scss";
import PropTypes from 'prop-types';


const ModalWindow = (props) => {
    return (
        <div className="modal">
            <div onClick={props.offWarning} className="modal-wrapper">
                <div className="modal-window">
                    <div className="modal-title">
                        <p>{props.title}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

ModalWindow.propTypes = {
    title: PropTypes.string,
  };

  ModalWindow.defaultProps = {
    title: 'Вы ввели не все данные!'
  };  

export default ModalWindow;