import { useContext, useEffect, useReducer, useRef } from 'react';
import styles from './styles.module.scss';
import { createPortal } from 'react-dom';
import { Button } from '../button/component';
import { UserContext } from '@/context/user-provider';


const reducer = (state, action) => {
  switch (action.type) {
    case 'change_name':
      return { ...state, name: action.payload };
    case 'change_email':
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

export const Modal = ({ isOpen, onClose }) => {
  const { updateUser } = useContext(UserContext);

  const [state, dispatch] = useReducer(reducer, {
    name: "",
    email: "",
  });

  const modalContainer = useRef();

  useEffect(() => {
    modalContainer.current = document.getElementById("modal-container");
  }, []);

  const { name, email } = state;

  const handleOkClick = () => {
    updateUser({ name, email });
    onClose();
  };

  const handleCancelClick = () => {
    onClose();
  };

  const handleNameChange = (event) => {
    dispatch({ type: 'change_name', payload: event.target.value });
  };

  const handleEmailChange = (event) => {
    dispatch({ type: 'change_email', payload: event.target.value });
  };

  if (!isOpen) {
    return null;
  }

  return (
    isOpen && createPortal(
      <>
        <div onClick={onClose} className={styles.overlay} />
        <div className={styles.root}>
          <form className={styles.modal}>
            <div className={styles.field}>
              <label htmlFor="name" >
                Имя:
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  placeholder="ваше имя"
                  onChange={handleNameChange}
                  style={{ marginLeft: "10px" }}
                />
              </label>
            </div>
            <div className={styles.field}>
              <label htmlFor="email" >
                e-mail:
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  placeholder="e-mail"
                  onChange={handleEmailChange}
                  style={{ marginLeft: "10px" }}
                />
              </label>
            </div>
            <div className={styles.buttons}>
              <Button className={styles.button} onClick={handleCancelClick}>Отмена</Button>
              <Button className={styles.button} onClick={handleOkClick}>Ок</Button>
            </div>
          </form>
        </div>
      </>,
      modalContainer.current)
  );
};
