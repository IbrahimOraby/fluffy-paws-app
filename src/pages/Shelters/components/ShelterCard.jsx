import Badge from "../../../ui/Badge/Badge";
import ButtonWithIcon from "../../../ui/Buttons/ButtonWithIcon";
import {
  StaticHeartIcon,
  StaticVerifiedIcon,
} from "../../../ui/Icons/StaticIcons";
import Rating from "../../../ui/Rating/Rating";
import Paragraph from "../../../ui/Typography/Paragraph/Paragraph";
import SubHeading from "../../../ui/Typography/SubHeadings/SubHeading";

const ShelterCard = () => {
  return (
    <>
      {/* Overall container */}

      <div className="flex mb-6 pb-6 gap-6 w-[90vw] max-w-[360px] sm:max-w-lg border-b border-base-300  ">
        <img
          className="sm:w-[185px] sm:h-[185px] rounded-lg object-cover w-[80px] h-[80px]"
          src="https://res.cloudinary.com/madpaws/image/upload/c_limit,f_auto,h_980,q_auto,w_980/v1/uploads/1896910/madpaws_1743484947_67eb7813c77ca.jpeg.jpg"
          alt="Shelter preview"
        />

        {/* Caption container */}
        <div className="flex flex-col flex-1 justify-between items-start">
          {/* Header container */}
          <div className="flex w-full items-center justify-between mb-2">
            <SubHeading type="h2" className="text-subheader-lg">
              John Doe
            </SubHeading>
            <ButtonWithIcon
              className="hover:bg-light-hover-color"
              icon={<StaticHeartIcon size={18} color="#be5985" />}
            />
          </div>

          {/*Card Details*/}
          <Paragraph className="text-paragraph-lg text-paragraph-color hidden sm:block ">
            Experienced Pet Sitter – Your Pets Deserve the Best!
          </Paragraph>
          <Paragraph className="text-paragraph-md text-paragraph-color mb-3">
            Portsaid (0.1km)
          </Paragraph>
          <div className="flex items-center">
            <Paragraph className="text-paragraph-sm text-paragraph-color">
              $49 / night
            </Paragraph>
            <div className="divider divider-horizontal"></div>

            <Rating rating={"5"} reviewsNum={"1"} />
          </div>
          <Badge
            className="bg-primary-color-100 text-primary-color my-2"
            text={"Certified"}
            icon={<StaticVerifiedIcon size={18} color="#be5985" />}
          />
        </div>
      </div>

    </>
  );
};

export default ShelterCard;
