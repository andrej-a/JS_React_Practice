import "./modalWindow.scss";
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

const ModalWindow = (props) => {
    const timeout= 300;

    return (
        <CSSTransition
        timeout={timeout}
        unmountOnExit
        classNames="alert"
        in={props.show}
        >
            <div className="modal alert">
            <div onClick={() => {
                props.offWarning()
            }} className="modal-wrapper">
                <div className="modal-window">
                    <div className="modal-title">
                        <p>{props.title}</p>
                    </div>
                </div>
            </div>
        </div>
        </CSSTransition>
    )
}

ModalWindow.propTypes = {
    title: PropTypes.string,
  };

  ModalWindow.defaultProps = {
    title: 'Вы ввели не все данные!'
  };  

export default ModalWindow;