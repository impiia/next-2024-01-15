import { ControlTabs } from '../control-tabs/component';
import styles from './styles.module.scss';


export const Restaurant = ({restaurant}) => {

  return (
    <div >
      <h2>{restaurant.name}</h2>
      <ControlTabs restaurantId={restaurant.id} />
    </div>
  );
};
