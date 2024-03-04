'use client';
import { useState } from "react";
import { Button } from "../button/component";
import styles from './styles.module.scss';
import { useReviewForm } from "./use-review-form";
import { Loader } from "../loader/component";

export const ReviewForm = ({ initialState, onClose, onSave, userName, userId }) => {
    const { form, setText, setRating } = useReviewForm(initialState, userId);
    const [isLoading, setIsLoading] = useState(false);
    const handleSave = () => {
        setIsLoading(true);
        onSave(form).then(() => {
            setIsLoading(false);
        }).catch((error) => {
            setIsLoading(false);
            console.error("Error:", error);
        });
    };

    return (
        isLoading ? <Loader /> : (
            <div className={styles.root}>
                <div className={styles.field}>
                    <span id="name">
                        Имя: {userName}
                    </span>
                </div>
                <div className={styles.field}>
                    <label htmlFor="text">Текст</label>
                    <textarea
                        id="text"
                        name="text"
                        placeholder="Напишите ваш отзыв"
                        value={form.text}
                        onChange={setText}
                    />
                </div>
                <div className={styles.field}>
                    <label htmlFor="rating">Рейтинг</label>
                    <input
                        id="rating"
                        name="rating"
                        type="number"
                        min="1"
                        max="5"
                        placeholder="Оцените от 1 до 5"
                        value={form.rating}
                        onChange={setRating}
                    />
                </div>
                <div className={styles.buttons}>
                    {onClose && <Button className={styles.submitButton} onClick={() => onClose(form)}>Cancel</Button>}
                    <Button className={styles.submitButton} onClick={handleSave}>Submit</Button>
                </div>
            </div>
        )
    );
}