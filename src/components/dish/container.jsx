
"use client"; 
import { decrement, increment, selectProductAmountById } from '@/redux/ui/cart';
import { ButtonMemoized } from '../button/component';
import { Dish } from './component';
import styles from './styles.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';

export const DishContainer = ({ dish, className }) => {
    const amount = useSelector((state) =>
        selectProductAmountById(state, dish.id)
    );
    const dispatch = useDispatch();

    const handleDecrement = useCallback(() => {
        dispatch(decrement(dish.id));
    }, [dispatch, dish.id]);

    const handleIncrement = useCallback(() => {
        dispatch(increment(dish.id));
    }, [dispatch, dish.id]);

    return (

        <div className={styles.root}>
                <Dish dish={dish} className={className} />
            <div className={styles.buttonContainer}>
                <ButtonMemoized className={styles.button} onClick={handleDecrement} disabled={amount === 0}>-</ButtonMemoized>
                <p>{amount}</p>
                <ButtonMemoized className={styles.button} onClick={handleIncrement} disabled={amount === 5}>+</ButtonMemoized>
            </div>
        </div>
    );
};