"use client"
import style from './styles.module.scss';
import { Button } from '../button/component';
import { useState } from 'react';
import { UpdateReviewFormContainer } from '../update-review-form/container';

export const Review = ({ review, user, onUpdate }) => {
    const [isEditMode, setIsEditMode] = useState(false);
    const setEditMode = () => {
        setIsEditMode(true);
    };

    const handleCancelClick = () => {
        setIsEditMode(false);
    };

    return (

        <div className={style.root}>
            <span>{user.name + ': '}</span>
            <span>{review.text + ' '}</span>
            <Button onClick={setEditMode}>Edit</Button>
            {isEditMode && <UpdateReviewFormContainer onUpdate={onUpdate}
                user={user}
                review={review}
                onClose={handleCancelClick}
            />}

        </div>
    )
}
