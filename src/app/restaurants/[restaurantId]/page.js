import { redirect } from 'next/navigation';

const RestaurantPage = ({params}) => {
  console.log(params.restaurantId+'/menu');
  redirect(params.restaurantId+'/menu');

};

export default RestaurantPage;