import { redirect } from 'next/navigation';

const RestaurantPage = ({params}) => {
  redirect(params.restaurantId+'/menu');

};

export default RestaurantPage;