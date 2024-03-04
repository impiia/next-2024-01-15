import { Reviews } from "./component";
import { createReview,updateReview, getReviewsByRestaurantId } from "@/services/api";

export const ReviewsContainer = async ({ restaurantId }) => {
    const reviews = await getReviewsByRestaurantId(restaurantId);
    const onSave = async (newReview) => {
        "use server";
        await createReview(restaurantId, newReview);
      };
      const onUpdate = async (updatedReview) => {
        "use server";
        await updateReview(updatedReview);
      };


    return (
        <Reviews reviews={reviews} onSave={onSave} onUpdate={onUpdate}/>
    );
};
