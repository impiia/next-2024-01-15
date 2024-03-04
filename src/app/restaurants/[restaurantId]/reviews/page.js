import { ReviewsContainer } from '@/components/reviews/container';

export default async function ReviewPage({ params }) {
  const restaurantId = params.restaurantId;

  return <ReviewsContainer restaurantId={restaurantId}/>;
}