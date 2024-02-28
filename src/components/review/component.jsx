"use client"
import style from './styles.module.scss';
import { Button } from '../button/component';
import { useState } from 'react';
import { UpdateReviewFormContainer } from '../update-review-form/container';

export const Review = ({ review, user }) => {
    const [isEditMode, setIsEditMode] = useState(false);

    const setEditMode = () => {
        setIsEditMode(true);
    };

    const handleCancelClick = () => {
        setIsEditMode(false);
    };

    return (

        <div className={style.root}>
            {user && <span>{user.name + ': '}</span>}
            <span>{review.text + ' '}</span>
            <Button onClick={setEditMode}>Edit</Button>
            {isEditMode && <UpdateReviewFormContainer
                    user={user}
                    review={review}
                     onUpdatedFinishet={() => setIsEditMode(false)} onClose={handleCancelClick}
                    />}
        </div>
    )
}
