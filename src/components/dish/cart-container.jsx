import style from './styles.module.scss';
import { Button } from '../button/component';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, selectProductAmountById } from '../../redux/ui/cart';

export const DishCartContainer = ({ dishId }) => {
    const amount = useSelector((state) =>
        selectProductAmountById(state, dishId)
    );
    const dispatch = useDispatch();
    const handleDecrement = () => {
        dispatch(decrement(dishId));
    };

    const handleIncrement = () => {
        dispatch(increment(dishId));
    };

    return (

        <div className={style.root}>
            <div>{dishId}</div>
            <div className={style.buttonContainer}>
                <Button className={style.button} onClick={handleDecrement} disabled={amount === 0}>-</Button>
                <p>{amount}</p>
                <Button className={style.button} onClick={handleIncrement} disabled={amount === 5}>+</Button>
            </div>
        </div>
    );
};


