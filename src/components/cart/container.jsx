import { useSelector } from "react-redux"
import { Cart } from "./component";
import { selectCartProductIds } from "@/redux/ui/cart";

export const CartContainer = () => {
    const dishIds = useSelector(selectCartProductIds);
    console.log(dishIds);
    return <Cart productIds={dishIds} />
}