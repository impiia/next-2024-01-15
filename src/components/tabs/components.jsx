
'use client'
import Link from 'next/link';
import styles from './styles.module.scss';
import { ButtonMemoized } from '../button/component';
import { usePathname } from 'next/navigation'

export const Tabs = ({ restaurants }) => {
    const pathname = usePathname();
    return (
        <div>
             {restaurants.map((restaurant) => {
                const id = restaurant.id.toString();
                const isActive = pathname.endsWith(id);

                return (
                    <Link href={`/restaurants/${restaurant.id}`} key={restaurant.id} passHref
                        className={styles.pageLink}>
                            <ButtonMemoized disabled={isActive}>{restaurant.name}</ButtonMemoized>
                    </Link>
                );
            })}
        </div>
    );
};