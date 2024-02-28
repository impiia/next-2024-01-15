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
    const result = await response.json();
    return result;
  }

  export async function getReviewsByRestaurantId(restaurantId) {
    const response = await fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`);
    const result = await response.json();
    return result;
  }
  
  