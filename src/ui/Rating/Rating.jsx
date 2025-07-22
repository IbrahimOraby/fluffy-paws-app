import { HoverStarIcon } from "../Icons/HoverIcons";
import { StaticStarIcon } from "../Icons/StaticIcons";
import Paragraph from "../Typography/Paragraph/Paragraph";

const Rating = ({ rating, reviewsNum }) => {
  return (
    <div className="flex items-center">
    <StaticStarIcon size={24} color="#F7C457" fill="#F7C457"/>
    <Paragraph className="ml-1">{rating} </Paragraph>
    <Paragraph className="ml-1 text-paragraph-color text-paragraph-sm flex items-center">({reviewsNum})</Paragraph>
    </div>
  );
};

export default Rating;
