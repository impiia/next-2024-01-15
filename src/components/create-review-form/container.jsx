"use client";
import { useContext } from 'react';
import { UserContext } from "@/context/user-provider";
import { ReviewForm } from "../review-form/component";

export const CreateReviewFormContainer = ({onSave }) => {

    const { name, id } = useContext(UserContext);

    if (!name) {
        return null;
    }

    return <ReviewForm  userName={name} userId={id} onSave={onSave}/>;
}
