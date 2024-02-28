import { getRestaurants } from "@/services/api";
import { Tabs } from '@/components/tabs/components';
import styles from "./styles.module.scss";

const Layout= async ({ children }) => {
    const restaurants = await getRestaurants();
    
    return (
        <div className={styles.root}>
            <Tabs restaurants={restaurants} />
            {children}
        </div>
    )
}

export default Layout;


