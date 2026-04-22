import { Star, StarHalf } from "lucide-react";

export default function Rating({
  rating,
  showLabel = true,
}: {
  rating: number;
  showLabel: boolean;
}) {
  const starCount = 5;
  const fullStars = Math.floor(rating); // total full starts
  const halfStar = rating - fullStars >= 0.5; // total rating - full stars if >=0.5; counted as half star
  return (
    <div className={`flex items-center gap-0.5`}>
      {[...Array(starCount)].map((_, index: number) => {
        if (index < fullStars) {
          // full stars

          return (
            <Star
              key={index}
              className="size-4 fill-[#EFBF04] text-[#EFBF04]"
            />
          );
        } else if (index === fullStars && halfStar) {
          // half star
          return (
            <StarHalf
              key={index}
              className="size-4 fill-[#EFBF04] text-[#EFBF04]"
            />
          );
        } else {
          // empty star
          return (
            <Star
              key={index}
              className={`size-4 fill-transparent text-light-gray`}
            />
          );
        }
      })}
      {showLabel && (
        <span className={`ml-1 text-xs text-gray-700`}>
          {rating.toFixed(2)}
        </span>
      )}
    </div>
  );
}
