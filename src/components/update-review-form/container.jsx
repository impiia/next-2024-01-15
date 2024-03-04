
import { ReviewForm } from "../review-form/component"

export const UpdateReviewFormContainer = ({ review, user, onClose, onUpdate }) => {
    const { id, text, rating } = review;
    return (
        <ReviewForm
            initialState={{ id, text, rating }}
            userName={user?.name}
            userId={user?.id}
            onSave={onUpdate}
            onClose={onClose}
        />
    );
}
