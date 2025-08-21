import { Link } from "react-router";
import Badge from "../../../ui/Badge/Badge";
import ButtonWithIcon from "../../../ui/Buttons/ButtonWithIcon";
import {
  StaticHeartIcon,
  StaticVerifiedIcon,
} from "../../../ui/Icons/StaticIcons";
import Rating from "../../../ui/Rating/Rating";
import Paragraph from "../../../ui/Typography/Paragraph/Paragraph";
import SubHeading from "../../../ui/Typography/SubHeadings/SubHeading";
import { calculateAverageRating } from "../../../utils/arrayHelpers";

const ShelterCard = ({
  id,
  name,
  city,
  price,
  description,
  image,
  reviews
}) => {
  const avgRating = calculateAverageRating(reviews);

  return (
    <Link
      to={`/shelter/${id}`}
      className="flex mb-6 pb-6 gap-6  border-b border-base-300 cursor-pointer"
    >
      <img
        className="sm:w-[185px] sm:h-[185px] rounded-lg object-cover w-[80px] h-[80px]"
        src={image}
        alt={name}
      />

      <div className="flex flex-col flex-1 justify-between items-start">
        <div className="flex w-full items-center justify-between mb-2">
          <SubHeading type="h2" className="text-subheader-lg text-header-color">
            {name}
          </SubHeading>
          {/* <ButtonWithIcon
            className="hover:bg-light-hover-color"
            icon={<StaticHeartIcon size={18} color="#be5985" />}
          /> */}
        </div>

        <Paragraph className="text-paragraph-lg text-paragraph-color hidden sm:block">
          {description}
        </Paragraph>

        <Paragraph className="text-paragraph-md text-paragraph-color mb-3">
          {city}
        </Paragraph>

        <div className="flex items-center mb-2">
          <Paragraph className="text-paragraph-sm text-paragraph-color">
            £{price} / night
          </Paragraph>
          <div className="divider divider-horizontal"></div>
          <Rating rating={avgRating} reviewsNum={reviews.length} /> 
        </div>

        <Badge
          className="bg-primary-color-100 text-primary-color my-2"
          text={"Certified"}
          icon={<StaticVerifiedIcon size={18} color="#be5985" />}
        />
      </div>
    </Link>
  );
};


export default ShelterCard;
