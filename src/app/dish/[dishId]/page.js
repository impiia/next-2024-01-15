import { DishContainer } from "@/components/dish/container";
import styles from "./styles.module.scss";
import { Ingredients } from "@/components/ingredients/component";
import { getDishById } from "@/services/api";

export default async function DishPage({params}) {

  const dish = await getDishById(params.dishId);

  return (
    <div className={styles.root}>
        <DishContainer dish={dish} className={styles.dish} />
        <Ingredients ingredients={dish.ingredients} />
    </div>
);
}
