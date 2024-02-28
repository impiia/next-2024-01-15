import styles from './styles.module.scss';
import Link from 'next/link';
import classNames from 'classnames';
import { User } from '../user/component';
import { CartButtonContainer } from '../cart-button/container';
import { useSelector } from 'react-redux';
import { selectProductAmount } from '@/redux/ui/cart';


export const Header = () => {
    return (
        <header className={styles.root}>
            <Link href="/" className={classNames(styles.logo)}>Home</Link>
            <Link href="/restaurants" className={classNames(styles.link)}>Restaurants</Link>
            <Link href="/contacts" className={classNames(styles.link)}>Contacts</Link>
            <Link href="/about-us" className={classNames(styles.link)}>About us</Link>
            <User />
            <CartButtonContainer />
        </header>
    );
};