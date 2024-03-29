import { ReviewContainer } from "../review/container";

export const Reviews = ({ reviews }) => {

    return (
        <>
            <h3>Отзывы</h3>
            <ul>
                {reviews?.map((review) => {
                    return (
                        <li key={review.id}>
                            <ReviewContainer review={review} />
                        </li>
                    );
                })}
            </ul>
        </>
    );
};
