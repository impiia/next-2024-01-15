"use client";
import { useContext } from 'react';
import { UserContext } from "@/context/user-provider";
import { createReview } from "@/services/api";
import { ReviewForm } from "../review-form/component";

export const CreateReviewFormContainer = ({ restaurantId }) => {
    const { name, id } = useContext(UserContext);
    if (!name) {
        return null;
    }

    const onSave = async (newReview) => {
        await createReview(restaurantId, {
            ...newReview,
            userId: id
        });
    };

    return <ReviewForm userName={name} onSave={onSave} />;
}
