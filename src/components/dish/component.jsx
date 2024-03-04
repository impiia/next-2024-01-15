import Link from "next/link";

export const Dish = ({ dish, className }) => {

  return (
    <div >
      <Link href={`/dish/${dish.id}`}>
        <div className={className}>{dish.name}</div>
        <div className={className}>{dish.price}</div>
      </Link>
    </div>
  );
};
