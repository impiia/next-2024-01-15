import style from './styles.module.scss';
import { Button } from '../button/component';
// import { useCallback, useState } from 'react';

export const Review = ({ review }) => {
    //  const [isEditMode, setIsEditMode] = useState(false);
    // const { data: user, isLoading } = useGetUsersQuery(undefined, {
    //     selectFromResult: (result) => {
    //         return ({
    //             ...result,
    //             data: result.data?.find(({ id }) => review.userId === id),
    //         })
    //     }
    // });

    // const setEditMode =() => {
    //     setIsEditMode(true);
    // };

    // const handleCancelClick = () => {
    //     setIsEditMode(false);
    // };

    return (
 
            <div className={style.root}>
                {/* {user && <span>{user.name + ': '}</span>} */}
                <span>{review.text + ' '}</span>
                <Button >Edit</Button>
                {/* {isEditMode && <UpdateReviewFormContainer
                    user={user}
                    review={review}
                    onUpdatedFinishet={() => setIsEditMode(false)} onClose={handleCancelClick}/>} */}
            </div>
        )
}
