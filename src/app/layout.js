import { Header } from '@/components/header/component';
import globalstyles from '../styles/global.css';
import { Footer } from '@/components/footer/component';
import styles from './styles.module.scss';
import { UserProvider } from '@/context/user-provider';
import { StoreProvider } from '@/redux/store-provider';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.root}>
        <StoreProvider>
          <UserProvider >
            <Header />
            {children}
            <Footer />
          </UserProvider>
        </StoreProvider>
        <div id="modal-container" />
        <div id="popover-container" />
      </body>
    </html>
  );
}
