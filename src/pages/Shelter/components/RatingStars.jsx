import { StaticStarIcon } from "../../../ui/Icons/StaticIcons";

export default function RatingStars({ rating = 0 }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <StaticStarIcon
          key={star}
          size={12}
          color={star <= rating ? "#F7C457" : "#D1D5DB"}
          fill={star <= rating ? "#F7C457" : "none"}
        />
      ))}
    </div>
  );
}
