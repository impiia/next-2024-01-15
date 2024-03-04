import styles from './styles.module.scss';
import Link from 'next/link';
import { User } from '../user/component';
import { CartButtonContainer } from '../cart-button/container';

export const Header = () => {
    return (
        <header className={styles.root}>
            <Link href="/" className={styles.logo}>Home</Link>
            <Link href="/restaurants" className={styles.link}>Restaurants</Link>
            <Link href="/contacts" className={styles.link}>Contacts</Link>
            <Link href="/about-us" className={styles.link}>About us</Link>
            <User />
            <CartButtonContainer />
        </header>
    );
};