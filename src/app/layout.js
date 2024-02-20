import { Header } from '@/components/header/component';
import globalstyles from '../styles/global.css';
import { Footer } from '@/components/footer/component';
import styles from './styles.module.scss';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
       <div className={styles.root}>
        <Header />
        {children}
        <Footer />
        </div>
      </body>
    </html>
  );
}
