
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
  const response = await fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`);
  return await response.json();
}
export async function createReview(restaurantId, newReview) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newReview)
  };

  const response = await fetch(`http://localhost:3001/api/review/${restaurantId}`, requestOptions);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
};



