import { Review } from "../review/component";

export const Reviews = ({ reviews }) => {

    return (
        <>
            <h3>Отзывы</h3>
            <ul>
                {reviews?.map((review) => {
                    return (
                        <li key={review.id}>
                            <Review review={review} />
                        </li>
                    );
                })}
            </ul>
        </>
    );
};
