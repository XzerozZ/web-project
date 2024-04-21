import Star from './star'
type RatingProps = {
  rating: number;
};

const Rating: React.FC<RatingProps> = ({ rating }) => {
  const filledStars = Math.floor(rating / 0.37);
  const hasHalfStar = rating - filledStars * 0.37 > 0;
  const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0);

  return (
    <div style={{ display: "flex" }}>
      {[...new Array(filledStars)].map((_, i) => (
        <Star key={i} filled={true} />
      ))}
      {hasHalfStar && <Star filled={true} width="37%" />}
      {[...new Array(emptyStars)].map((_, i) => (
        <Star key={i + filledStars + (hasHalfStar ? 1 : 0)} filled={false} />
      ))}
    </div>
  );
};

export default Rating;