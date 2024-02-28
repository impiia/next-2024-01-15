import Link from 'next/link';
import styles from './styles.module.scss';
import { Button } from '../button/component';

export const Tabs = ({ restaurants }) => {
    return (
        <div>
            {restaurants.map((restaurant) => (
                <Link href={`/restaurants/${restaurant.id}`} key={restaurant.id} className={styles.pageLink}>
                    <Button>{restaurant.name}</Button>
                </Link>
            ))}
        </div>
    );
};