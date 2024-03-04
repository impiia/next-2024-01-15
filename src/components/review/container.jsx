import { getUserById } from '@/services/api';
import { Review } from './component';

export const ReviewContainer = async ({ review, onUpdate }) => {
    const user = await getUserById(review.userId);

    return (
            <Review review={review} user={user} onUpdate={onUpdate} />
    )

}
