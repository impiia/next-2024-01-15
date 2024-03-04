import { revalidateTag } from "next/cache";
export async function getRestaurants() {
  const response = await fetch('http://localhost:3001/api/restaurants');
  return await response.json();
}

export async function getRestaurantById(restaurantId) {
  const response = await fetch(`http://localhost:3001/api/restaurant/${restaurantId}`);
  return await response.json();
}

export async function getDishesByRestaurantId(restaurantId) {
  const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`);
  return await response.json();
}

export async function getUser() {
  const response = await fetch(`http://localhost:3001/api/users`);
  return await response.json();
}

export async function getUserById(userId) {
  const response = await fetch(`http://localhost:3001/api/users`);
  const users = await response.json();
  const user = users.find(user => user.id === userId);
  return user;
}

export async function getReviewsByRestaurantId(restaurantId) {
  const response = await fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`,
    { next: { tags: ['reviews'] } }
  )
  return await response.json();
}
export async function createReview(restaurantId, newReview) {
  console.log("createReview : ", newReview.text);
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newReview),
  };

  await fetch(`http://localhost:3001/api/review/${restaurantId}`,
    requestOptions);
  revalidateTag('reviews');
};

export async function updateReview(review) {
  const requestOptions = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(review),
  };

  await fetch(`http://localhost:3001/api/review/${review.id}`, requestOptions);
  revalidateTag('reviews');
};

export async function getDishById(dishId) {
  const response = await fetch(`http://localhost:3001/api/dish/${dishId}`);
  return await response.json();;
};





