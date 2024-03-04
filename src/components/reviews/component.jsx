import { CreateReviewFormContainer } from "../create-review-form/container";
import { ReviewContainer } from "../review/container";

export const Reviews =  ({ reviews, onSave, onUpdate }) => {

    return (
        <>
            <h3>Отзывы</h3>
            <ul>
                {reviews?.map((review) => {
                    return (
                        <li key={review.id}>
                            <ReviewContainer review={review} onUpdate={onUpdate} />
                        </li>
                    );
                })}
            </ul>
            <CreateReviewFormContainer onSave={onSave} />
        </>
    );
};
