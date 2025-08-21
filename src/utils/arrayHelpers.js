export function calculateAverageRating(reviews) {
    if (!reviews || reviews.length === 0) return 0;
  
    const total = reviews.reduce(
      (sum, review) => sum + Number(review.rating || 0),
      0
    );
    const avg = total / reviews.length;
  
    return Math.round(avg * 2) / 2;
  }
  