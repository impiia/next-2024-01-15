
import Link from 'next/link';
import { Button } from '../button/component';
import styles from './styles.module.scss';

export const ControlTabs = ({ restaurantId }) => {
    return (
        <div >

            <Link href={`/restaurants/${restaurantId}/menu`} className={styles.pageLink}>
                <Button>Menu</Button>
            </Link>


            <Link href={`/restaurants/${restaurantId}/reviews`} className={styles.pageLink}>
                <Button>Review</Button>
            </Link>
        </div>
    );
};