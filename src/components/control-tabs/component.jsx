"use client" ;
import Link from 'next/link';
import { ButtonMemoized } from '../button/component';
import styles from './styles.module.scss';
import { usePathname } from 'next/navigation';

export const ControlTabs = ({ restaurantId }) => {
    const pathname = usePathname();
    const isActiveMenu = pathname.endsWith("/menu");
    const isActiveReview = pathname.endsWith("/reviews");

    return (
        <div>
            <Link href={`/restaurants/${restaurantId}/menu`} className={styles.pageLink}>
                <ButtonMemoized disabled={isActiveMenu}>Menu</ButtonMemoized>
            </Link>

            <Link href={`/restaurants/${restaurantId}/reviews`} className={styles.pageLink}>
                <ButtonMemoized disabled={isActiveReview}>Review</ButtonMemoized>
            </Link>
        </div>
    );
};