'use client'
import Link from 'next/link';
import { Button } from '../button/component';
import styles from './styles.module.scss';
import { usePathname } from 'next/navigation'

export const ControlTabs = ({ restaurantId }) => {
    const pathname = usePathname();
    const isActiveMenu = pathname.endsWith("/menu");
    const isActiveReview = pathname.endsWith("/reviews");

    return (
        <div >
        
            <Link href={`/restaurants/${restaurantId}/menu`} className={styles.pageLink}>
                <Button disabled={isActiveMenu}>Menu</Button>
            </Link>


            <Link href={`/restaurants/${restaurantId}/reviews`} className={styles.pageLink}>
                <Button disabled={isActiveReview}>Review</Button>
            </Link>
        </div>
    );
};