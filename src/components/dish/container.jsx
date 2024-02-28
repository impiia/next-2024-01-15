
"use client"; 
import { decrement, increment, selectProductAmountById } from '@/redux/ui/cart';
import { Button } from '../button/component';
import { Dish } from './component';
import styles from './styles.module.scss';
import { useDispatch, useSelector } from 'react-redux';

export const DishContainer = ({ dish, className }) => {
    const amount = useSelector((state) =>
        selectProductAmountById(state, dish.id)
    );
    const dispatch = useDispatch();

    const handleDecrement = () => {
        dispatch(decrement(dish.id));
    };

    const handleIncrement = () => {
        dispatch(increment(dish.id));
    };

    return (

        <div className={styles.root}>
            {/* <NavLink className={styles.link} to={`/dish/${dish.id}`}> */}
                <Dish dish={dish} className={className} />
            {/* </NavLink> */}
            <div className={styles.buttonContainer}>
                <Button className={styles.button} onClick={handleDecrement} disabled={amount === 0}>-</Button>
                <p>{amount}</p>
                <Button className={styles.button} onClick={handleIncrement} disabled={amount === 5}>+</Button>
            </div>
        </div>
    );
};