
import { getDishesByRestaurantId } from "@/services/api";
import { Menu } from '@/components/menu/component';

export default async function MenuPage({params}) {
    const restaurantId = params.restaurantId;
    const dishes = await getDishesByRestaurantId(restaurantId);
    return (
      <Menu dishes={dishes}/>
    )
  }

