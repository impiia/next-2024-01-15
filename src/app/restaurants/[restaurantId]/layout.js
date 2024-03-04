
import { getRestaurantById } from "@/services/api";
import { Restaurant } from '@/components/restaurant/component';

const Layout = async ({ children, params }) => {
    const restaurant = await getRestaurantById(params.restaurantId);
    return (
        <div>
          <Restaurant restaurant={restaurant}/>
          {children}
        </div>
    );
};

export default Layout;
