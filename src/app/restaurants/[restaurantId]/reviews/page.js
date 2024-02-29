import { getReviewsByRestaurantId } from "@/services/api";
import { Reviews } from '@/components/reviews/component';

export default async function ReviewPage({params}) {
    const restaurantId = params.restaurantId;
    const reviews = await getReviewsByRestaurantId(restaurantId);
    return (
      <Reviews reviews={reviews} restaurantId={restaurantId}/>
    )
  }
